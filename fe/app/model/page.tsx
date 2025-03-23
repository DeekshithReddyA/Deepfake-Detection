"use client";

import { Upload } from "@/icons/Upload";
import { Zap } from "@/icons/Zap";
import { Button } from "@/ui/Button";
import { ProgressBar } from "@/ui/ProgressBar";
import { ResultBox } from "@/ui/ResultBox";
import Image from "next/image";
import { useState } from "react";
import Img1 from "../../public/Image1.png"
import { ImageIcon } from "@/icons/Image";

export default function Model() {
  const [predicted, setPredicted] = useState<boolean>(false);

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
            predicted ? "w-sm col-span-1" : "w-lg"
          } h-96 z-10 p-4 flex flex-col border border-neutral-100 rounded-lg shadow-md transition-all duration-500 ease-in-out`}
        >
          <div className="font-sans font-semibold text-xl m-2">
            Upload Image
          </div>
          <div className="w-full h-5/6 border border-neutral-200 shadow-sm rounded-lg">
            <div
              onClick={(e) => {
                e.preventDefault();
                setPredicted(true);
              }}
              className="w-auto h-5/6 mt-6 mx-4 cursor-pointer border-2 border-dashed border-neutral-200 rounded-lg flex flex-col items-center justify-center hover:bg-gray-50 hover:border-neutral-800 transition-colors"
            >
              <div className="p-2 bg-gray-200 rounded-full">
                <Upload size={28} />
              </div>
              <div className="font-sans text-lg font-medium">
                Drag & Drop or Click to Upload
              </div>
              <div className="font-sans text-md text-neutral-500">
                Supported formats: .jpg, .jpeg, .png
              </div>
              <div className="mt-8">
                <Button variant="secondary" placeholder="Select File" />
              </div>
            </div>
          </div>
        </div>

        <div
          className={`xl:w-2xl md:w-sm md:ml-25 md:col-span-2 col-span-1 h-96 px-4 pt-4 pb-3 flex flex-col border border-neutral-100 rounded-lg shadow-md transition-all duration-500 ease-in-out transform
            ${
              predicted
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full md:absolute"
            }
          `}
        >
          <div className="flex justify-between mb-2">
            <div className="font-sans text-lg font-medium">Analysis</div>
            <ResultBox prediction={"deepfake"} />
          </div>
          <div className="w-full h-full flex flex-col border border-neutral-200 rounded-md">
            <div className="flex items-center space-x-1 ml-4 mt-2">
              <div>
                <Zap size={17} />
              </div>
              <div className="font-sans font-medium">Confidence Score</div>
            </div>
            <ProgressBar title={"Real"} progress={10}/>
            <ProgressBar title={"Deepfake"} progress={65} />
            <ProgressBar title={"AI Generated"} progress={25} />
            <div className="flex items-center space-x-1 ml-4 my-2">
                <ImageIcon size={17}/>
            <div className="text-md font-sans font-semibold">
                Anomalies
            </div>
            </div>
            <div className="flex ml-6 space-x-10">
                <Image className="h-38 w-42 rounded-sm" src={Img1} alt="Image 1"/>
                <Image className="h-38 w-42 rounded-sm" src={Img1} alt="Image 1"/>
                <Image className="h-38 w-42 rounded-sm" src={Img1} alt="Image 1"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
