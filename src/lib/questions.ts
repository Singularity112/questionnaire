export const questions = [
  {
    id: "1",
    type: "sex",
    text: "What is your gender assigned at birth?"
  },
  {
    id: "2",
    type: "radio",
    text: "Are you currently pregnant?",
    options: ["Yes", "No"],
    conditional: {
      questionId: 1,
      value: "Female"
    }
  },
  {
    id: "3",
    type: "input",
    text: "Do you have any known allergies?"
  },
  {
    id: "4",
    type: "radio",
    text: "Another really important question with a lot of text",
    options: ["option 1", "option 2", "option 3", "option ... 4"]
  },
  {
    id: "5",
    type: "input",
    text: "Write something to this input"
  },
  {
    id: "6",
    type: "end",
    text: "You are all set!"
  }
];
