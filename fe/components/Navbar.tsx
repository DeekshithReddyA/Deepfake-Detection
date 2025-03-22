import { Shield } from "@/icons/Shield";

export const Navbar = () => {
    return(<div className="h-15 bg-transparent">
        <div className="flex justify-between">
            <div className="flex p-1 justify-between items-center mt-1 md:ml-10 md:mt-3">
                <div className="m-2">
                    <Shield size={24}/>
                </div>
                <div className="text-lg md:text-xl font-semibold">
                    Deepfake Detector
                </div>
            </div>
            <div className="flex p-1 justify-between items-center mt-1 mr-2 space-x-3 md:mr-12 md:mt-3 md:space-x-5">
                <div className="text-sm md:text-normal font-semibold">
                    Home
                </div>
                <div className="text-sm md:text-normal font-semibold">
                    Learn More
                </div>
                <div className="text-sm md:text-normal font-semibold">
                    About Me
                </div>
            </div>
        </div>
    </div>);
}