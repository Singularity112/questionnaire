import Questionnaire from "@/components/Questionnaire";
import { Question } from "@/interfaces/common";
import { questions } from "@/lib/questions";

function App() {
  return (
    <div className="h-screen flex items-center justify-center text-gray-700">
      <Questionnaire questions={questions as Question[]} />
    </div>
  );
}

export default App;
