import { Question, Results } from "@/interfaces/common";

export type HandleSelection = (value: string, id: string) => void;

export interface IQuestionnaire {
  questions: Question[];
}

export interface BaseQuestionProps {
  question: Question;
  handleSelection: HandleSelection;
  reset: () => void;
  results: Results;
}

export interface IProgressBar {
  currentValue: number;
  maxValue: number;
}
