"use client";
import { Zap } from "@/icons/Zap";
import { Button } from "@/ui/Button";
import { useRouter } from "next/navigation";


export default function LearnMore(){
    const router = useRouter();
    const listItemStyle = "font-sans text-sm md:text-base"
    return (<div className="md:mx-12 mx-4 my-6">
        <div className="font-sans md:text-4xl text-xl font-semibold mb-6">
            Understanding Deepfakes & Detection
        </div>
        <div className="grid grid-cols-2 mb-10">
            <div className="col-span-1 md:mr-5">
                <div className="font-sans md:text-3xl text-lg font-semibold mb-4">
                    What are Deepfakes?
                </div>
                <div className="font-sans md:text-lg text-sm">
                    Deepfakes are synthetic media where a person's likeness is replaced with someone else's using artificial intelligence. The term is a combination of "deep learning" and "fake".
                </div>
                <br></br>
                <div className="font-sans md:text-lg text-sm">
                    These manipulated videos or images are created using deep neural networks, specifically generative adversarial networks (GANs) or other AI techniques that can analyze multiple images of a person to create a convincing fake.
                </div>
                <br></br>
                <div className="font-sans md:text-lg text-sm">
                    While the technology has legitimate uses in entertainment and art, it also poses significant concerns for misinformation, fraud, and privacy violations.
                </div>
            </div>
            <div className="col-span-1 md:m-12 m-2">
                <div className="font-sans md:text-xl font-medium mb-2">Common Types of Deepfakes</div>
                <ul className="list-disc space-y-1 ml-4">
                    <li className={listItemStyle}>
                        Face swaps (replacing one person's face with another)
                    </li>
                    <li className={listItemStyle}>
                        Lip-sync deepfakes (manipulating mouth movements to match fake audio)
                    </li>
                    <li className={listItemStyle}>
                        Voice cloning (creating synthetic speech that mimics a real person)
                    </li>
                    <li className={listItemStyle}>
                        Full body puppetry (transferring movements from one person to another)
                    </li>
                    <li className={listItemStyle}>
                        AI-generated faces (completely synthetic people who don't exist)
                    </li>
                </ul>
            </div>
        </div>
        <div className="">
            <div className="font-sans md:text-3xl font-semibold mb-4">
                How we Detect Deepfakes
            </div>
            <div className="font-sans md:text-2xl font-semibold mb-4">
                EfficientNet: Our Core Technology
            </div>
            <div className="font-sans md:text-lg">
                At the heart of our detection system is EfficientNet, a convolutional neural network architecture that offers state-of-the-art accuracy while being computationally efficient.
            </div>

            <div className="font-sans md:text-xl font-medium m-4">Why EfficientNet?</div>
            <div className="font-sans md:text-lg m-4">EfficientNet uses a compound scaling method that uniformly scales all dimensions of depth, width, and resolution using a simple yet highly effective compound coefficient.</div>
            <div className="flex m-2 space-x-4">
                <div className="p-4 border border-neutral-200 shadow-sm rounded-sm">
                    <div className="font-sans md:text-base text-sm font-medium mb-2">
                        Superior Accuracy
                    </div>
                    <div className="font-sans md:text-base text-xs">Achieves higher accuracy with fewer parameters compared to other models</div>
                </div>
                <div className="p-4 border border-neutral-200 shadow-sm rounded-sm">
                    <div className="font-sans md:text-base text-sm font-medium mb-2">
                        Computational Efficiency
                    </div>
                    <div className="font-sans md:text-base text-xs">Requires less computing power while maintaining high performance</div>
                </div>
                <div className="p-4 border border-neutral-200 shadow-sm rounded-sm">
                    <div className="font-sans md:text-base text-sm font-medium mb-2">
                       Scalability
                    </div>
                    <div className="font-sans md:text-base text-xs">Easily scales to different model sizes for various deployment scenarios</div>
                </div>

            </div>
            <br></br>
            <div className="font-sans md:text-lg my-4">We've fine-tuned our EfficientNet models on diverse datasets of both authentic and manipulated media to ensure robust performance across different types of deepfakes and varying image qualities.</div>
            <br></br>
            <div className="grid grid-cols-2 mb-10">
            <div className="col-span-1 mr-5">
                <div className="font-sans md:text-3xl font-semibold mb-4">The Future of Deepfake Detection</div>
                    <div className="font-sans md:text-lg mb-4">
                    As deepfake technology becomes more sophisticated, detection methods must continuously evolve. We're investing in research on several fronts:
                    </div>
                    <ul className="list-disc space-y-1 ml-4">
                        <li className={listItemStyle}>Temporal analysis across video frames to detect inconsistencies</li>
                        <li className={listItemStyle}>Physiological signals like pulse and blood flow that are difficult to fake</li>
                        <li className={listItemStyle}>Cross-modal analysis comparing audio and visual elements for consistency</li>
                        <li className={listItemStyle}>Blockchain-based content authentication systems</li>
                    </ul>
                </div>
                <div className="col-span-1 m-4">
                    <div className="font-sans md:text-xl font-medium mb-2">Challenges Ahead</div>
                    <div className="font-sans mb-2">Several challenges remain in deepfake detection:</div>
                    <ul className="list-disc space-y-1 ml-4">
                        <li className={listItemStyle}>Low-quality videos that mask telltale signs of manipulation</li>
                        <li className={listItemStyle}>Generative models that learn to avoid known detection methods</li>
                        <li className={listItemStyle}>The need for detection to work on compressed media shared on social platforms</li>
                        <li className={listItemStyle}>Balancing detection accuracy with computational efficiency for real-time analysis</li>
                        <li className={listItemStyle}>Keeping pace with rapidly evolving deepfake techniques</li>
                    </ul>
                </div>
            </div>
        </div>
        <br></br>
        <br></br>
        <div className="flex flex-col items-center justify-center">
            <div className="font-sans md:text-3xl text-xl font-semibold mb-4">Try Our Deepfake Detection</div>
            <div className="text-center w-1/2 font-sans md:text-lg text-sm mb-6">Experience our advanced deepfake detection technology firsthand. Upload your own image to see how our system analyzes and identifies potential manipulations.</div>
            <div className="mr-5">
            <Button startIcon={<Zap size={20}/>} placeholder="Try it Now" variant="primary" onClick={(e) => {
                e.preventDefault();
                router.push('/model');
            }}/>
            </div>
        </div>
        <br></br>
        <br></br>
    </div>);
}