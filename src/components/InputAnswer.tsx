import { BaseQuestionProps } from "@/interfaces/components";
import { useState } from "react";

function InputAnswer({
  question,
  handleSelection,
  results
}: BaseQuestionProps) {
  const initialState = results[question.id]?.value || "";
  const [inputValue, setInputValue] = useState(initialState);

  const isEmpty = inputValue.length < 1;

  return (
    <div className="flex flex-col gap-5 items-center">
      <input
        className="w-full border-b-2 focus:border-purple-500 outline-none py-2"
        autoFocus
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
      />

      <button
        onClick={() => handleSelection(question.id, inputValue)}
        className={`py-3 px-10 text-white ${isEmpty ? "bg-gray-400" : "bg-purple-500"}`}
        disabled={isEmpty}
      >
        Next
      </button>
    </div>
  );
}

export default InputAnswer;
