"use client";

import { Upload } from "@/icons/Upload";
import { Zap } from "@/icons/Zap";
import { Button } from "@/ui/Button";
import { ProgressBar } from "@/ui/ProgressBar";
import { ResultBox } from "@/ui/ResultBox";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ImageIcon } from "@/icons/Image";
import { useDropzone } from "react-dropzone";
import { Linkedin } from "@/icons/Linkedin";

export default function Model() {
    const [predicted, setPredicted] = useState<boolean>(false);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [loading , setLoading] = useState<boolean>(false);
    const [prediction, setPrediction] = useState<"real" | "generated" | "deepfake" | null>(null);
    const [probabilities, setProbabilities] = useState<number[]>([]);
    const [visualization, setVisualization] = useState(null);
    const [backendStatus , setBackendStatus] = useState<boolean>(true);

    useEffect(() => {
    const checkBackend = async () => {
      try {
        const response = await fetch("https://deepfake-backend.deekshithreddy.site/health");
        if (response.ok) {
          setBackendStatus(true);
        } else {
          setBackendStatus(false);
        }
      } catch (error) {
        setBackendStatus(false);
      }
    };

    checkBackend(); // Check immediately when the component mounts

    const interval = setInterval(checkBackend, 5000); // Check every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

    
    const onDrop = (acceptedFiles: File[]) => {
        setSelectedFile(acceptedFiles[0]);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const handleSubmit = async () => {
        if(!selectedFile) return;

        const formData = new FormData();
        formData.append('file', selectedFile);
        setLoading(true);

        try {
            const response = await fetch('https://deepfake-backend.deekshithreddy.site/predict', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            console.log(data);
            setPrediction(data.label);
            setProbabilities(data.probabilities);
            setVisualization(data.visualization);
            setLoading(false);
            setPredicted(true);
        } catch (error) {
            console.error('Error:', error);
        }
    }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="font-sans md:text-4xl text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-800 to-blue-400 my-2">
        Analyze Your Image
      </div>
      <div className="text-center text-neutral-500 md:w-1/3 md:text-base text-xs w-6/7">
        Upload an image to detect if it's a deepfake. Our advanced AI will
        analyze the image and highlight any anomalies found.
      </div>

      <div
        className={`grid transition-all duration-500 ease-in-out mt-4 gap-4
          ${predicted ? "md:grid-cols-3" : "md:grid-cols-1"} grid-cols-1`}
      >
        <div
          className={`${
            predicted ? "w-sm col-span-1" : "ms:w-lg w-sm"
          } h-96 z-10 pt-4 px-4 pb-1 flex flex-col border border-neutral-100 rounded-lg shadow-md transition-all duration-500 ease-in-out`}
        >
          <div className="font-sans font-semibold md:text-xl text-lg m-2">
            Upload Image
          </div>
          <div className="w-full h-5/6 border border-neutral-200 shadow-sm rounded-lg">
            <div {...getRootProps({ className: 'dropzone' })} className="w-auto h-5/6 mt-6 mx-4 cursor-pointer border-2 border-dashed border-neutral-200 rounded-lg flex flex-col items-center justify-center hover:bg-gray-50 hover:border-neutral-800 transition-colors">
              <div className="p-2 bg-gray-200 rounded-full">
                <Upload size={28} />
              </div>
              <input {...getInputProps()} />
              { isDragActive ? (
                <div className="font-sans text-lg font-medium">Drop the files here ...</div>
              ) : selectedFile ? (
                <div className="ml-2 font-sans md:text-lg text-sm font-medium">{selectedFile.name}</div>
              ) : (
                <div>
                <div className="font-sans text-lg font-medium">
                Drag & Drop or Click to Upload
              </div>
              <div className="font-sans text-md text-neutral-500">
                Supported formats: .jpg, .jpeg, .png
              </div>
              </div>
              )
              }

              <div className="mt-8">
                <Button variant="secondary" placeholder="Select File" />
              </div>
            </div>
          </div>
        <div className="flex mt-2 justify-center">
            {!loading && 
            <Button onClick={(e) => {
                e.preventDefault();
                handleSubmit();
            }} variant={"primary"} placeholder={"Predict"}/>
            }
            {loading && 
            <div className="font-sans text-md font-medium">Predicting...</div>}   
        </div>
        </div>

        <div
          className={`xl:w-2xl md:w-sm md:ml-25 md:col-span-2 col-span-1 h-96 px-4 pt-4 pb-3 flex flex-col border border-neutral-100 rounded-lg shadow-md transition-all duration-500 ease-in-out transform
            ${
              predicted
                ? "opacity-100 translate-x-0"
                : "opacity-0 hidden translate-x-full md:absolute" // Remove hidden for transition but affects the layout. Need to fix
            }
          `}
        >
          <div className="flex justify-between mb-2">
            <div className="font-sans text-lg font-medium">Analysis</div>
            <ResultBox prediction={prediction} />
          </div>
          <div className="w-full h-full flex flex-col border border-neutral-200 rounded-md">
            <div className="flex items-center space-x-1 ml-4 mt-2">
              <div>
                <Zap size={17} />
              </div>
              <div className="font-sans font-medium">Confidence Score</div>
            </div>
            <ProgressBar title={"Real"} progress={probabilities[0] * 100}/>
            <ProgressBar title={"Deepfake"} progress={probabilities[1] * 100} />
            <ProgressBar title={"AI Generated"} progress={probabilities[2] * 100} />
            <div className="flex items-center space-x-1 ml-4 md:my-2 my-6">
                <ImageIcon size={17}/>
            <div className="text-md font-sans font-semibold">
                Anomalies
            </div>
            </div>
            <div className="flex xl:space-x-10 space-x-2">
                <Image className="xl:h-38 xl:w-full h-32 w-full rounded-sm" height={50} width={100} src={`data:image/png;base64,${visualization}`} alt="Image 1"/>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
        <div>
          {backendStatus && 
          <div className="font-medium">🟢 The Backend is up and running. Test out the model by uploading an image.</div>}
          {!backendStatus && 
          <div>
          <div className="flex font-sans text-lg font-semibold">🔴 The Backend is currently down. Ping me on
          <a className="mx-2 mt-1" href="www.linkedin.com/in/deekshithreddy1910" target="_blank" rel="noopener noreferrer">
             <Linkedin size={18}/>
          </a>
              to get it up and running.</div>
          </div>}
        </div>
        <div className="font-semibold m-2">Note: The backend is self-hosted since the model is a bit too large for the cloud charges to be inexpensive.
        </div>
    </div>
  );
}
