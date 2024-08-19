import { BaseQuestionProps } from "@/interfaces/components";
import { IconManFilled, IconWomanFilled } from "@tabler/icons-react";

const options = [
  {
    value: "Male",
    icon: IconManFilled
  },
  {
    value: "Female",
    icon: IconWomanFilled
  }
];

function SexAnswer({ question, handleSelection, results }: BaseQuestionProps) {
  return (
    <div>
      <h4>Please select your sex</h4>

      <div className="flex flex-row gap-4 mt-5">
        {options.map((option) => {
          const Icon = option.icon;
          const isActive = results[question.id]?.value === option.value;
          return (
            <button
              key={option.value}
              className={`border rounded-md flex-1 flex flex-col items-center p-10 ${isActive ? "border-purple-500" : "border-gray-700"}`}
              onClick={() => handleSelection(question.id, option.value)}
            >
              <Icon
                width={80}
                height={80}
                className={isActive ? "fill-purple-500" : "fill-gray-500"}
              />
              <span
                className={`text-lg ${isActive ? "text-purple-500" : " text-gray-500"}`}
              >
                {option.value}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SexAnswer;
