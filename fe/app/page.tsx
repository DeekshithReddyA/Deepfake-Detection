import { Navbar } from "@/components/Navbar";
import { Crown } from "@/icons/Crown";
import { Shield } from "@/icons/Shield";
import { Upload } from "@/icons/Upload";
import { Zap } from "@/icons/Zap";
import { Button } from "@/ui/Button";

export default function Home() {
  const iconStyles = "bg-gray-200 p-2 rounded-full";
  const itemsBoxStyles = "w-2/3 flex flex-col items-center justify-center p-4 border border-neutral-100 shadow-md my-1";
  return (
    <div>
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className="flex flex-col items-center md:items-start md:m-14 m-8">
          <div className="font-sans md:text-6xl font-bold text-4xl mb-2">
            Detect Deepfakes 
          </div>
          <div className="md:w-2/3 font-sans md:text-6xl text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-700 to-blue-300">
            with Precision
          </div>
          <div className="md:w-6/7 font-sans md:text-lg text-neutral-500 my-6">
            Upload your image to instantly analyze and detect potential deepfake manipulation using our AI technology powered by EfficientNet.
          </div>
          <div className="flex">
            <Button startIcon={<Upload size={20}/>} variant="primary" placeholder="Try it Now"/>
            <Button startIcon={<Zap size={20}/>} variant="secondary" placeholder="Learn More"/>
          </div>
        </div>
        <div className="flex flex-col items-center mt-6">
          <div className={iconStyles}>
            <Shield size={32} />
          </div>
          <div className="font-bold text-2xl font-sans mt-3">How it Works</div>
          <div className="flex items-center justify-center">
            <div className="w-1/2 font-sans text-neutral-500 text-center mb-2">
              Our advanced AI system analyzes images to detect deepfake
              manipulations with high accuracy and precision.
            </div>
          </div>
          <div className={itemsBoxStyles}>
            <div className={iconStyles}>
              <Upload size={20} />
            </div>
            <div className="font-semibold text-xl font-sans my-2">
              1. Upload
            </div>
            <div className="font-sans text-neutral-500 text-center">
              Upload any image you want to analyze
            </div>
          </div>
          <div className={itemsBoxStyles}>
            <div className={iconStyles}>
              <Zap size={20} />
            </div>
            <div className="font-semibold text-xl font-sans my-2">
              2. Inference
            </div>
            <div className="font-sans text-neutral-500 text-center">
              Our AI model analyzes the content for manipulation signs
            </div>
          </div>
          <div className={itemsBoxStyles}>
            <div className={iconStyles}>
              <Crown size={20} />
            </div>
            <div className="font-semibold text-xl font-sans my-2">
              3. Predictions
            </div>
            <div className="font-sans text-neutral-500 text-center">
              Get detailed predictions with anomaly visualization
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
