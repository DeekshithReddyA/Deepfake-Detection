import { Bot } from "@/icons/Bot";
import { CircleCheck } from "@/icons/CircleCheck";
import { CircleX } from "@/icons/CircleX";
import { ResultBoxProps } from "@/types/ResultBoxProps";

export const ResultBox = (props:ResultBoxProps) => {
    const boxStyles = {
        real : "",
        deepfake: "",
        generated : "",
    }
    const placeholderMap = {
        real : "Real Image",
        deepfake: "Deepfake Image",
        generated: "AI Generated Image"
    }
    return(
        <div>
        {props.prediction === "real" && 
            <div className="px-2 p-1 rounded-md bg-neutral-800">
                <div className="text-white flex items-center justify-center space-x-1">
                    <CircleCheck size={17} />
                <div className="font-sans font-medium text-white text-sm">
                    Authentic Image
                </div>
                </div>
            </div>}
        {props.prediction === "deepfake" && 
            <div className="px-2 p-1 rounded-md bg-red-600">
                <div className="text-white flex items-center justify-center space-x-1">
                    <CircleX size={17} />
                <div className="font-sans font-medium text-white text-sm">
                    Deepfake Image
                </div>
                </div>
            </div>}
        {props.prediction === "generated" && 
            <div className="px-2 p-1 rounded-md bg-blue-800">
                <div className="text-white flex justify-center space-x-1">
                    <Bot size={18} />
                <div className="font-sans font-medium text-white text-sm">
                    AI Generated Image
                </div>
                </div>
            </div>}
        </div>
);
}