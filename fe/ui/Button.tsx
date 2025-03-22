import { ButtonProps } from "@/types/ButtonProps";

export const Button = (props: ButtonProps) => {
    const buttonStyles = {
        primary: "bg-neutral-900 text-white -z-10",
        secondary: "border border-neutral-200 hover:bg-slate-200/50"
    }
    const hoverStyles = {
        primary : "absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 rounded-md", 
        secondary : ""
    }
    return (
        <div className={`rounded-md cursor-pointer relative overflow-hidden group ${props.variant === "primary" ? ""  : "shadow-sm"}`}>
            <div className={`${hoverStyles[props.variant]}`}></div>
            <div className={`relative px-4 p-2 md:px-6 rounded-md flex items-center justify-center space-x-2 ${buttonStyles[props.variant]}`}>
                <div>
                    {props.startIcon}
                </div>
                <div className="font-sans font-medium text-sm md:text-base">
                    {props.placeholder}
                </div>
            </div>
        </div>
    );
}