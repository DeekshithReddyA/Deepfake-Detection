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
- **Next.js frontend**: Provides a user-friendly interface for file upload and displays results.

## Requirements

### Backend

- Docker (optional)
- Python 3.7+
- Flask
- Flask-CORS
- EfficientNet_pytorch
- Pillow
- OpenCV

### Frontend

- Node.js
- npm
- next
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

   OR

### Backend Setup (Using Docker)

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yourusername/deepfake-detection.git
   cd deepfake-detection
   ```

2. **Build and run the Docker container**:
   ```sh
   docker build -t deepfake-backend .
   docker run -p 9000:9000 deepfake-backend
   ```

3. **Backend will be available at**:
   ```
   http://localhost:9000
   ```

   

### Frontend Setup (Next.js)

1. **Navigate to the frontend directory**:
   ```sh
   cd frontend
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Start the Next.js app**:
   ```sh
   npm run dev
   ```

### Directory Structure

```
deepfake-detection/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   └── model_epoch_1.pth
│
├── frontend/
│   ├── app/
│   ├── components/
│   ├── public/
│   ├── package.json
│   ├── next.config.js
│   └── ...
│
├── Dockerfile
│
└── README.md
```

### Running the Application

1. **Backend**: Start using Docker.
   ```sh
   docker run -p 9000:9000 deepfake-backend
   ```
   OR 
   ```sh
   cd backend
   python app.py
   ```

2. **Frontend**: Start the Next.js application.
   ```sh
   cd frontend
   npm run dev
   ```

3. **Access the application**: Open your browser and navigate to `http://localhost:3000`.

## Usage

- **Upload a file**: Drag and drop an image or video file into the dropzone, or click to select a file.
- **View results**: The model will process the file and display the classification results along with the probabilities for each class (real, deepfake, AI-generated).

## Technical Details

### Model Training

The EfficientNet_b3 model was trained on a diverse dataset including real and deepfake images, as well as AI-generated images. The training process involved using various augmentation techniques to enhance the model's ability to generalize across different types of images and videos.

### Flask Backend

The Flask backend handles the model loading, preprocessing of input files, and prediction. It also includes endpoints to serve the Next.js frontend and manage API requests.

### Next.js Frontend

The Next.js frontend provides a user-friendly interface for uploading files and viewing the classification results. It uses `react-dropzone` for drag-and-drop functionality and communicates with the Flask backend to fetch predictions.

## Contributions

Contributions are welcome! Please feel free to submit a pull request or open an issue if you have any suggestions or improvements.



---

