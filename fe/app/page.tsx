import { Navbar } from "@/components/Navbar";
import { Shield } from "@/icons/Shield";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col m-14">
          <div className="font-sans text-6xl font-bold">
            Detect Deepfakes
          </div>
          <div className="w-2/3 font-sans text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-indigo-700 to-blue-300">
            with Confidence
          </div>
        </div>
        <div className="flex flex-col items-center mt-10">
          <div className="text-black p-2 bg-gray-300 rounded-full">
            <Shield size={32} />
          </div>
          <div className="font-bold text-2xl font-sans my-4">
            How it Works
          </div>

        </div>
      </div>
    </div>
  );
}
