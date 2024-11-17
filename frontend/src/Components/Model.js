import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

export default function Model() {
    const [selectedFile, setSelectedFile] = useState(null);
    const [result, setResult] = useState(null);

    const onDrop = (acceptedFiles) => {
        setSelectedFile(acceptedFiles[0]);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const handleFileUpload = () => {
        // Simulate model prediction
        const simulatedResult = {
            class: 'Deepfake',
            probabilities: {
                Real: 0.1,
                Deepfake: 0.8,
                Generated: 0.1,
            },
        };
        setResult(simulatedResult);
    };

    return (
        <div style={containerStyle}>
            <h1>Upload Image or Video for Deepfake Detection</h1>
            <div {...getRootProps({ className: 'dropzone' })} style={dropzoneStyle}>
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Drop the files here ...</p>
                ) : (
                    <p>Drag 'n' drop a file here, or click to select a file</p>
                )}
            </div>
            <button onClick={handleFileUpload} disabled={!selectedFile}>Upload and Detect</button>

            {result && (
                <div>
                    <h2>Result: {result.class}</h2>
                    <p>Real: {result.probabilities.Real}</p>
                    <p>Deepfake: {result.probabilities.Deepfake}</p>
                    <p>Generated: {result.probabilities.Generated}</p>
                </div>
            )}
        </div>
    );
}

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
