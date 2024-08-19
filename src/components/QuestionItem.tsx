import EndAnswer from "@/components/EndAnswer";
import InputAnswer from "@/components/InputAnswer";
import RadioAnswer from "@/components/RadioAnswer";
import SexAnswer from "@/components/SexAnswer";
import { BaseQuestionProps } from "@/interfaces/components";

const componentMap = {
  sex: SexAnswer,
  input: InputAnswer,
  radio: RadioAnswer,
  end: EndAnswer
};

function QuestionItem({
  question,
  handleSelection,
  reset,
  results
}: BaseQuestionProps) {
  let AnswerComponent = componentMap[question.type];

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-5">{question.text}</h2>
      <AnswerComponent
        question={question}
        handleSelection={handleSelection}
        reset={reset}
        results={results}
      />
    </div>
  );
}

export default QuestionItem;
