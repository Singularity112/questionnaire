import ProgressBar from "@/components/ProgressBar";
import QuestionItem from "@/components/QuestionItem";
import { Results } from "@/interfaces/common";
import { HandleSelection, IQuestionnaire } from "@/interfaces/components";
import { IconArrowLeft } from "@tabler/icons-react";
import { useEffect, useState } from "react";

function Questionnaire({ questions }: IQuestionnaire) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [results, setResults] = useState<Results>({});
  const [startTime, setStartTime] = useState(Date.now());

  const currentQuestion = questions[currentQuestionIdx];

  const incrementedCurrentQuestionIdx = currentQuestionIdx + 1;

  const isBackButtonDisabled = currentQuestionIdx === 0;

  useEffect(() => {
    const state = JSON.parse(localStorage.getItem("questionnaire") || "{}");
    if (state) {
      setCurrentQuestionIdx(state.nextQuestionIdx || 0);
      setResults(state.results || {});
    }
  }, []);

  const saveResults = (state: {
    results: Results;
    nextQuestionIdx: number;
  }) => {
    localStorage.setItem("questionnaire", JSON.stringify(state));
  };

  const navigateToQuestion = (questionIdx: number) => {
    setStartTime(Date.now());
    setCurrentQuestionIdx(questionIdx);
  };

  const previousQuestion = () => {
    let previousQuestionIdx = currentQuestionIdx - 1;

    while (previousQuestionIdx >= 0) {
      const { conditional } = questions[previousQuestionIdx];

      if (
        !conditional ||
        results[conditional.questionId].value === conditional.value
      ) {
        break;
      }

      previousQuestionIdx--;
    }

    navigateToQuestion(previousQuestionIdx);
  };

  const nextQuestion = (updatedResults: Results) => {
    let nextQuestionIdx = currentQuestionIdx + 1;

    while (nextQuestionIdx < questions.length) {
      const { conditional } = questions[nextQuestionIdx];

      if (
        !conditional ||
        updatedResults[conditional.questionId].value === conditional.value
      ) {
        break;
      }

      nextQuestionIdx++;
    }

    navigateToQuestion(nextQuestionIdx);
    saveResults({
      results: updatedResults,
      nextQuestionIdx
    });
  };

  const handleSelection: HandleSelection = (id, value) => {
    if (results[id]?.value === value) {
      nextQuestion(results);
      return;
    }
    const finishTime = Date.now();
    const questionDuration = finishTime - startTime;

    const updatedResults = {
      ...results,
      [id]: {
        value,
        duration: questionDuration
      }
    };

    setResults(updatedResults);
    nextQuestion(updatedResults);
  };

  const reset = () => {
    setResults({});
    setCurrentQuestionIdx(0);
  };

  return (
    <div className="bg-white shadow-md min-w-[30%] py-5 px-10">
      <div className="flex flex-row">
        <div className="flex-1">
          <button
            className={`flex flex-row gap-2 ${isBackButtonDisabled ? "opacity-50" : ""}`}
            disabled={currentQuestionIdx === 0}
            onClick={previousQuestion}
          >
            <IconArrowLeft /> <span className="text-sm">Back</span>
          </button>
        </div>
        <div className="flex-1 text-center font-bold">G O A L S</div>
        <div className="flex-1 text-right text-sm">
          {incrementedCurrentQuestionIdx} / {questions.length}
        </div>
      </div>
      <div className="mt-5">
        <ProgressBar
          currentValue={incrementedCurrentQuestionIdx}
          maxValue={questions.length}
        />
      </div>
      <QuestionItem
        question={currentQuestion}
        handleSelection={handleSelection}
        reset={reset}
        results={results}
      />
    </div>
  );
}

export default Questionnaire;
