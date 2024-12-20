import os
import torch
import torch.nn as nn
from torchvision import transforms
from efficientnet_pytorch import EfficientNet
from flask import Flask, request, jsonify
from flask_cors import CORS
from PIL import Image
import io
import cv2
from waitress import serve

# Initialize Flask app and allow CORS
app = Flask(__name__)
CORS(app)

# Device configuration
device = torch.device('cuda' if torch.cuda.is_available() else 'cpu')

# Define the model
model = EfficientNet.from_pretrained('efficientnet-b3')
model._fc = nn.Linear(model._fc.in_features, 3)
model = model.to(device)

# Load the saved model weights
model_load_path = 'model_epoch_1.pth'
model.load_state_dict(torch.load(model_load_path, map_location=device))
model.eval()

# Data transformations
data_transforms = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
])

# Class labels
class_labels = ['real', 'deepfake', 'generated']

# Prediction function for images
def predict_image(image_bytes):
    image = Image.open(io.BytesIO(image_bytes)).convert('RGB')
    image = data_transforms(image)
    image = image.unsqueeze(0)  # Add batch dimension
    image = image.to(device)

    with torch.no_grad():
        outputs = model(image)
        probabilities = torch.nn.functional.softmax(outputs[0], dim=0)
        predicted_class = probabilities.argmax().item()
        predicted_label = class_labels[predicted_class]
        prediction_probabilities = probabilities.cpu().numpy().tolist()

    return predicted_label, prediction_probabilities

# Prediction function for videos
def predict_video(video_bytes, frames_per_video=5):
    video_path = 'temp_video.mp4'
    with open(video_path, 'wb') as f:
        f.write(video_bytes)

    cap = cv2.VideoCapture(video_path)
    total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
    frame_list = []

    for i in range(frames_per_video):
        frame_id = int(total_frames / frames_per_video * i)
        cap.set(cv2.CAP_PROP_POS_FRAMES, frame_id)
        ret, frame = cap.read()
        if ret:
            frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
            frame = Image.fromarray(frame)
            frame = data_transforms(frame)
            frame_list.append(frame)
        else:
            break
    cap.release()
    os.remove(video_path)

    if len(frame_list) > 0:
        frames_tensor = torch.stack(frame_list)
        frames_tensor = frames_tensor.mean(dim=0).unsqueeze(0)  # Average frames and add batch dimension
        frames_tensor = frames_tensor.to(device)

        with torch.no_grad():
            outputs = model(frames_tensor)
            probabilities = torch.nn.functional.softmax(outputs[0], dim=0)
            predicted_class = probabilities.argmax().item()
            predicted_label = class_labels[predicted_class]
            prediction_probabilities = probabilities.cpu().numpy().tolist()

        return predicted_label, prediction_probabilities
    else:
        return None, []

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file provided'}), 400

    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400

    try:
        file_extension = file.filename.split('.')[-1].lower()
        if file_extension in ['jpg', 'jpeg', 'png']:
            img_bytes = file.read()
            label, probabilities = predict_image(img_bytes)
        elif file_extension in ['mp4']:
            video_bytes = file.read()
            label, probabilities = predict_video(video_bytes)
        else:
            return jsonify({'error': 'Unsupported file type'}), 400

        return jsonify({
            'label': label,
            'probabilities': probabilities
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500
env = 'prod'
port = int(os.environ.get('PORT',5000))

if __name__ == '__main__':
    if env == 'dev':
        app.run(host='0.0.0.0', port=port)
    else:
        serve(app , host='0.0.0.0',port=port)
