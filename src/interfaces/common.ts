export type QuestionType = "sex" | "input" | "radio" | "end";

export interface Question {
  type: QuestionType;
  id: string;
  text: string;
  options?: string[];
  conditional?: {
    questionId: string;
    value: string;
  };
}

export interface Results {
  [key: string]: {
    value: string;
    duration: number;
  };
}
