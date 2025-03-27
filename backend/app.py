import numpy as np
import torch
import torch.nn as nn
from torchvision import transforms
from efficientnet_pytorch import EfficientNet
import matplotlib.pyplot as plt
import cv2
from lime import lime_image
from flask import Flask, request, jsonify
from flask_cors import CORS
from waitress import serve
import base64
import io
import os
from PIL import Image
import matplotlib
matplotlib.use('Agg')  # Required for non-interactive backend

# Add these to your existing imports at the top of the file

# Initialize Flask app and allow CORS
app = Flask(__name__)
CORS(app, origins=["https://deepfake-detector-fe.vercel.app","https://deepfake-detection-fe.vercel.app", "http://localhost:3000" , "http://192.168.1.102:3000"])

# Device configuration
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

# Define the model
model = EfficientNet.from_pretrained('efficientnet-b3')
model._fc = nn.Linear(model._fc.in_features, 3)
model = model.to(device)

# Load the saved model weights
model_load_path = 'model_epoch_1.pth'
model.load_state_dict(torch.load(model_load_path, map_location=device , weights_only=True))
model.eval()

# Data transformations
data_transforms = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
])

# Class labels
class_labels = ['real', 'deepfake', 'generated']

def predict_image_with_lime(image_bytes):
    """
    Predicts image class and generates LIME explanation with visualization
    Returns prediction results and base64 encoded visualization
    """
    # Load and process the image
    image = Image.open(io.BytesIO(image_bytes)).convert('RGB')
    original_image = image.copy()
    image_tensor = data_transforms(image)
    image_tensor = image_tensor.unsqueeze(0)
    image_tensor = image_tensor.to(device)

    # Get initial prediction
    with torch.no_grad():
        outputs = model(image_tensor)
        probabilities = torch.nn.functional.softmax(outputs[0], dim=0)
        predicted_class = probabilities.argmax().item()
        predicted_label = class_labels[predicted_class]
        prediction_probabilities = probabilities.cpu().numpy().tolist()

    # Define prediction function for LIME
    def predict_fn(images):
        batch = torch.stack([data_transforms(Image.fromarray(img)) for img in images])
        batch = batch.to(device)
        with torch.no_grad():
            outputs = model(batch)
            return torch.nn.functional.softmax(outputs, dim=1).cpu().numpy()

    # Create LIME explainer
    explainer = lime_image.LimeImageExplainer()
    resized_image = original_image.resize((224, 224))  # Resize before LIME
    explanation = explainer.explain_instance(
        np.array(resized_image),
        predict_fn,
        top_labels=3,
        hide_color=0,
        num_samples=1000
    )

    # Get image and mask
    temp, mask = explanation.get_image_and_mask(
        predicted_class,
        positive_only=False,
        num_features=5,
        hide_rest=False
    )

    # Process mask and get contours
    mask_ = np.uint8(mask)
    contours, _ = cv2.findContours(mask_, cv2.RETR_EXTERNAL, cv2.CHAIN_APPROX_SIMPLE)

    # Set box color based on prediction
    box_color = (0, 255, 0) if predicted_label == 'real' else (255, 0, 0)

    # Create visualization
    plt.figure(figsize=(15, 10))
    
    # Original image
    plt.subplot(1, 3, 1)
    plt.imshow(resized_image)
    plt.title('Original Image')
    plt.axis('off')
    
    # LIME explanation
    plt.subplot(1, 3, 2)
    plt.imshow(temp)
    plt.title(f'Explanation - Predicted: {predicted_label}')
    plt.axis('off')
    
    # Bounding boxes
    plt.subplot(1, 3, 3)
    img_with_boxes = np.array(resized_image.copy())
    for cnt in contours:
        x, y, w, h = cv2.boundingRect(cnt)
        cv2.rectangle(img_with_boxes, (x, y), (x + w, y + h), box_color, 2)
    plt.imshow(img_with_boxes)
    plt.title(f'Bounding Boxes - Predicted: {predicted_label}')
    plt.axis('off')

    # Save plot to bytes buffer
    buf = io.BytesIO()
    plt.savefig(buf, format='png', bbox_inches='tight')
    plt.close()
    buf.seek(0)
    
    # Convert plot to base64 string
    plot_base64 = base64.b64encode(buf.getvalue()).decode()
    
    return predicted_label, prediction_probabilities, plot_base64


@app.route('/predict', methods=['POST'])
def predict_with_explanation():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    try:
        file_extension = file.filename.split('.')[-1].lower()
        if file_extension not in ['jpg', 'jpeg', 'png']:
            return jsonify({'error': 'Only image files are supported for LIME explanation'}), 400

        img_bytes = file.read()
        label, probabilities, visualization = predict_image_with_lime(img_bytes)

        return jsonify({
            'label': label,
            'probabilities': probabilities,
            'visualization': visualization  # Base64 encoded plot
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500
    
@app.route("/health", methods=["GET"])
def health_check():
    return jsonify({"status": "online"}), 200
    
env = 'prod'
port = int(os.environ.get('PORT',9000))

if __name__ == '__main__':
    if env == 'dev':
        app.run(host='0.0.0.0', port=port)
    else:
        serve(app , host='0.0.0.0',port=port)