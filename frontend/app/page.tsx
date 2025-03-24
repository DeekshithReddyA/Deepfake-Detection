"use client";
import { Clock } from "@/icons/Clock";
import { Crown } from "@/icons/Crown";
import { ImageIcon } from "@/icons/Image";
import { Shield } from "@/icons/Shield";
import { Upload } from "@/icons/Upload";
import { Zap } from "@/icons/Zap";
import { Button } from "@/ui/Button";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const iconStyles = "bg-gray-200 p-2 rounded-full";
  const itemsBoxStyles = "w-2/3 flex flex-col items-center justify-center p-4 border border-neutral-100 shadow-md my-1";

  return (
    <div>
      <Head >
        <title>Deepfake Detector</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="flex flex-col items-center md:items-start md:m-14 m-8">
          <div className="font-sans md:text-6xl font-bold text-4xl mb-2">
            Detect Deepfakes 
          </div>
          <div className="md:w-2/3 font-sans md:text-6xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-700 to-blue-300">
            with Precision
          </div>
          <div className="md:w-6/7 text-center md:text-start font-sans md:text-lg text-neutral-500 my-6">
            Upload your image to instantly analyze and detect potential deepfake manipulation using our AI technology powered by EfficientNet.
          </div>
          <div className="flex space-x-4 md:space-x-6">
            <Button onClick={(e) => {
              e.preventDefault();
              router.push('/model');
            }} startIcon={<Upload size={20}/>} variant="primary" placeholder="Try it Now"/>
            <Button onClick={(e) => {
              e.preventDefault();
              router.push('/learn-more');
            }} startIcon={<Zap size={20}/>} variant="secondary" placeholder="Learn More"/>
          </div>
          
          <div className="flex mt-10 space-x-2 md:space-x-6">
            <div>
              <div className="p-4 flex flex-col items-center justify-center border border-neutral-100 shadow-sm md:space-y-2 space-y-1">
                <div>
                  <Crown size={24} />
                </div>
                <div className="text-xl md:text-3xl font-bold font-sans">
                  98.8%
                </div>
                <div className="font-sans text-center text-neutral-500 text-xs md:text-md">
                  Accuracy rate
                </div>
              </div>
            </div>
            <div>
              <div className="py-4 px-2 flex flex-col items-center justify-center border border-neutral-100 shadow-sm md:space-y-2 space-y-1">
                <div>
                  <Clock size={24} />
                </div>
                <div className="text-xl md:text-3xl font-bold font-sans">
                  2.3s
                </div>
                <div className="font-sans text-center text-neutral-500 text-xs md:text-md">
                  Average Processing
                </div>
              </div>
            </div>
            <div>
              <div className="p-4 flex flex-col items-center justify-center border border-neutral-100 shadow-sm md:space-y-2 space-y-1">
                <div>
                  <ImageIcon size={24} />
                </div>
                <div className="text-xl md:text-3xl font-bold font-sans">
                  1M+
                </div>
                <div className="font-sans text-center text-neutral-500 text-xs md:text-md">
                  Image Dataset
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="flex flex-col items-center mt-6">
          <div className={iconStyles}>
            <Shield size={32} />
          </div>
          <div className="font-bold md:text-2xl text-xl font-sans mt-3">How it Works</div>
          <div className="flex items-center justify-center">
            <div className="w-1/2 font-sans text-neutral-500 text-center md:text-base text-sm mb-2">
              Our advanced AI system analyzes images to detect deepfake
              manipulations with high accuracy and precision.
            </div>
          </div>
          <div className={itemsBoxStyles}>
            <div className={iconStyles}>
              <Upload size={20} />
            </div>
            <div className="font-semibold md:text-xl text-lg font-sans my-2">
              1. Upload
            </div>
            <div className="font-sans text-neutral-500 text-sm md:text-base text-center">
              Upload any image you want to analyze
            </div>
          </div>
          <div className={itemsBoxStyles}>
            <div className={iconStyles}>
              <Zap size={20} />
            </div>
            <div className="font-semibold md:text-xl text-lg font-sans my-2">
              2. Inference
            </div>
            <div className="font-sans text-neutral-500 text-sm md:text-base text-center">
              Our AI model analyzes the content for manipulation signs
            </div>
          </div>
          <div className={itemsBoxStyles}>
            <div className={iconStyles}>
              <Crown size={20} />
            </div>
            <div className="font-semibold md:text-xl text-lg font-sans my-2">
              3. Predictions
            </div>
            <div className="font-sans text-neutral-500 text-sm md:text-base text-center">
              Get detailed predictions with anomaly visualization
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
