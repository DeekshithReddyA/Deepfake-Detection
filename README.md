# Deepfake Detection Model

This project focuses on detecting deepfake images and videos, as well as AI-generated images. The model classifies inputs into three categories: real, deepfake, and AI-generated. The model has achieved an accuracy of 98.1% using the EfficientNet_b3 architecture.

## Model Overview

- **Architecture**: EfficientNet_b3, a Convolutional Neural Network (CNN) known for its efficiency and accuracy.
- **Training Data**: Diverse dataset of images and videos, including celebrity images and various other sources.
- **Accuracy**: Achieved an accuracy of 98.1% on the validation set.

## Features

- **Real-time detection**: Upload an image or video to get instant classification results.
- **Three-class classification**: Classifies inputs as real, deepfake, or AI-generated.
- **User-friendly interface**: Drag-and-drop functionality for easy file upload.
- **Flask backend**: Serves the model and handles predictions.
- **React frontend**: Provides a user-friendly interface for file upload and displays results.

## Requirements

### Backend

- Python 3.7+
- Flask
- Flask-CORS
- EfficientNet_pytorch
- Pillow
- OpenCV

### Frontend

- Node.js
- npm
- react
- react-dropzone
- react-router-dom

## Installation and Setup

### Backend Setup

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/deepfake-detection.git
   cd deepfake-detection/backend
   ```

2. **Create and activate a virtual environment**:
   ```sh
   python3 -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. **Install dependencies**:
   ```sh
   pip install -r requirements.txt
   ```

4. **Run the Flask app**:
   ```sh
   python app.py
   ```

### Frontend Setup

1. **Navigate to the frontend directory**:
   ```sh
   cd ../frontend
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Start the React app**:
   ```sh
   npm start
   ```

### Directory Structure

```
deepfake-detection/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── model/  # Contains model files
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   └── UploadImage.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── ...
│   ├── package.json
│   └── ...
│
└── README.md
```

### Running the Application

1. **Backend**: Start the Flask server.
   ```sh
   cd backend
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   python app.py
   ```

2. **Frontend**: Start the React application.
   ```sh
   cd ../frontend
   npm start
   ```

3. **Access the application**: Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Upload a file**: Drag and drop an image or video file into the dropzone, or click to select a file.
- **View results**: The model will process the file and display the classification results along with the probabilities for each class (real, deepfake, AI-generated).

## Technical Details

### Model Training

The EfficientNet_b3 model was trained on a diverse dataset including real and deepfake images, as well as AI-generated images. The training process involved using various augmentation techniques to enhance the model's ability to generalize across different types of images and videos.

### Flask Backend

The Flask backend handles the model loading, preprocessing of input files, and prediction. It also includes endpoints to serve the React frontend and manage API requests.

### React Frontend

The React frontend provides a user-friendly interface for uploading files and viewing the classification results. It uses `react-dropzone` for drag-and-drop functionality and communicates with the Flask backend to fetch predictions.

## Contributions

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or improvements.



---

