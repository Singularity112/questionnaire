import { BaseQuestionProps } from "@/interfaces/components";

function EndAnswer({ reset, results }: BaseQuestionProps) {
  let totalTime = 0;

  for (let key in results) {
    totalTime += results[key].duration;
  }

  const secondsSpent = totalTime / 1000;

  return (
    <div className="flex justify-center flex-col">
      <span>You spent {secondsSpent} seconds to complete questionnaire</span>
      <button
        onClick={reset}
        className="py-3 px-10 text-white bg-purple-500 mt-5"
      >
        Reset
      </button>
    </div>
  );
}

export default EndAnswer;
