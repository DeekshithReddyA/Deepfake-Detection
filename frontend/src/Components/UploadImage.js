import React, { useState ,useRef } from 'react';
import { useDropzone } from 'react-dropzone';

const UploadImage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [prediction, setPrediction] = useState(null);
    const [probabilities, setProbabilities] = useState(null);
    const [visualization, setVisualization] = useState(null);
    const hiddenTextAreaRef = useRef(null);

    const onDrop = (acceptedFiles) => {
        setSelectedFile(acceptedFiles[0]);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handlePaste = (event) => {
        const items = event.clipboardData.items;
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            if (item.kind === 'file') {
                const file = item.getAsFile();
                setSelectedFile(file);
                break;
            }
        }
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!selectedFile) return;

        const formData = new FormData();
        formData.append('file', selectedFile);

        try {
            const response = await fetch('http://localhost:5000/predict', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            console.log(data);
            setPrediction(data.label);
            setProbabilities(data.probabilities);
            setVisualization(data.visualization);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const focusTextArea = () => {
        if (hiddenTextAreaRef.current) {
            hiddenTextAreaRef.current.focus();
        }
    };

    return (
        <div style={containerStyle} onClick={focusTextArea}>
                <textarea
                ref={hiddenTextAreaRef}
                style={hiddenTextAreaStyle}
                onPaste={handlePaste}
                aria-hidden="true"
            />
            <h2>Upload an image or video to check if it's real, a deepfake, or generated</h2>
            <div {...getRootProps({ className: 'dropzone' })} style={dropzoneStyle}>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Drop the files here ...</p>
                ) : selectedFile ? (
                    <p>{selectedFile.name} selected</p>
                ) : (
                    <p>Drag 'n' drop a file here, or click to select a file or paste a copied file</p>
                )}
            </div>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
                        <input className="input-group mb-3" type="file" onChange={handleFileChange} />
                        <button className="btn btn-dark" type="submit">Upload</button>
                    </form>
                </div>
            </div>
            <div className="mb-3"></div>
            <div className="mb-3"></div>
            <div className="mb-3"></div>
            <div className="mb-3">----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</div>
            {prediction && (
                <div>
                    <p className='fs-4'>Prediction: {prediction} image</p>
                            {probabilities && Object.keys(probabilities).map((label, index) => (
                                <li key={index} className="dropdown-item">
                                    {class_labels[index]}: {(probabilities[index] * 100).toFixed(2)}%
                                </li>
                            ))}
                        </div>
            )}
                                {visualization && (
                        <div className="visualization-container" style={visualizationContainerStyle}>
                            <h3>LIME Explanation</h3>
                            <img 
                                src={`data:image/png;base64,${visualization}`}
                                alt="LIME visualization"
                                style={visualizationImageStyle}
                            />
                        </div>
                    )}
        </div>
    );
};

const class_labels = ['real', 'deepfake', 'generated'];

const containerStyle = {
    padding: '20px',
    textAlign: 'center',
};

const dropzoneStyle = {
    border: '2px dashed #cccccc',
    borderRadius: '5px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
    marginTop: '20px',
    width: '80%',
    marginLeft: 'auto',
    marginRight: 'auto',
};



const hiddenTextAreaStyle = {
    position: 'absolute',
    opacity: 0,
    pointerEvents: 'none',
    width: 0,
    height: 0,
};

const visualizationContainerStyle = {
    marginTop: '30px',
    padding: '20px',
};

const visualizationImageStyle = {
    maxWidth: '100%',
    height: 'auto',
    margin: '20px auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
};

export default UploadImage;
