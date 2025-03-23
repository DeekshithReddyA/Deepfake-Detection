import { ProgressBarProps } from "@/types/ProgressBarProps";

export const ProgressBar = (props: ProgressBarProps) => {
    return (
        <div>
                <div className="flex justify-between">
              <div className="ml-5 font-sans font-semibold text-sm">{props.title}</div>
              <div className="mr-5 font-sans font-semibold text-sm">{props.progress}%</div>
                </div>
              <div className="mx-4 relative h-2 overflow-hidden border-2 border-neutral-300 bg-neutral-200 rounded-lg">
                <div
                  className="absolute inset-y-0 left-0 bg-neutral-900 rounded-r-lg transition-all duration-300 ease-out"
                  style={{ width: `${props.progress}%` }}
                ></div>
              </div>
            </div>
    );
}