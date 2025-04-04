"use client";
import { Github } from "@/icons/Github";
import { Shield } from "@/icons/Shield";
import { useRouter } from "next/navigation";

export const Navbar = () => {
    const router = useRouter();
    const navbarItemsStyles = "text-xs md:text-base font-semibold text-center cursor-pointer hover:scale-[1.05] transition ease-in-out duration-300"
    return(<div className="h-15 bg-transparent">
        <div className="flex justify-between">
            <div onClick={(e) => {
                e.preventDefault();
                router.push('/')
            }} className="flex p-1 justify-between items-center mt-1 md:ml-10 md:mt-3 cursor-pointer">
                <div className="m-2">
                    <Shield size={24}/>
                </div>
                <div className="text-sm md:text-xl font-semibold">
                    Deepfake Detector
                </div>
            </div>
            <div className="flex p-1 justify-between items-center mt-1 mr-2 space-x-2 md:mr-12 md:mt-3 md:space-x-5">
                <div className={navbarItemsStyles} onClick={(e) => {
                    e.preventDefault();
                    router.push('/')
                }}>
                    Home
                </div>
                <div className={navbarItemsStyles} onClick={(e) => {
                    e.preventDefault();
                    router.push('/learn-more');
                }}>
                    Learn More
                </div>
                <div className={navbarItemsStyles}>
                    <a 
                        href="https://github.com/DeekshithReddyA/Deepfake-Detection" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="rounded-full border p-1 flex items-center justify-center"
                    >
                        <Github size={16} />
                    </a>
                    </div>
            </div>
        </div>
    </div>);
}