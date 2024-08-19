import { IProgressBar } from "@/interfaces/components";

function ProgressBar({ currentValue, maxValue }: IProgressBar) {
  const percentage = Math.min((currentValue / maxValue) * 100, 100);

  return (
    <div className="bg-gray-500 rounded-md h-5 overflow-hidden">
      <div
        className="bg-purple-500 h-full duration-200"
        style={{
          width: `${percentage}%`
        }}
      ></div>
    </div>
  );
}

export default ProgressBar;
