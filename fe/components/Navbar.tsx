"use client";
import { Shield } from "@/icons/Shield";
import { useRouter } from "next/navigation";

export const Navbar = () => {
    const router = useRouter();
    const navbarItemsStyles = "text-xs md:text-base font-semibold text-center cursor-pointer hover:scale-[1.05] transition ease-in-out duration-300"
    return(<div className="h-15 bg-transparent">
        <div className="flex justify-between">
            <div className="flex p-1 justify-between items-center mt-1 md:ml-10 md:mt-3">
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
                <div className={navbarItemsStyles} onClick={(e) => {
                    e.preventDefault();
                    router.push('/about-me');
                }}>
                    About Me
                </div>
            </div>
        </div>
    </div>);
}