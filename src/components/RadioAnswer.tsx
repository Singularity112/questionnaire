import { BaseQuestionProps } from "@/interfaces/components";

function RadioAnswer({
  question,
  handleSelection,
  results
}: BaseQuestionProps) {
  return (
    <div className="flex flex-col gap-4">
      {question.options?.map((option) => {
        const isActive = results[question.id]?.value === option;
        return (
          <button
            className={`border  rounded-md ${isActive ? "border-purple-500" : "border-gray-700"}`}
            key={option}
            onClick={() => handleSelection(question.id, option)}
          >
            <label
              className={`flex gap-3 p-5 ${isActive ? "text-purple-500" : "text-gray-500"}`}
            >
              <input type="radio" value={option} checked={isActive} />
              <span>{option}</span>
            </label>
          </button>
        );
      })}
    </div>
  );
}

export default RadioAnswer;
