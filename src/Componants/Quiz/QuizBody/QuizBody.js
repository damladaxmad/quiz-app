import React, { useState } from "react";
import Question from "./Question";
import { Button } from "@material-ui/core";
import MyPagination from "../../Pagination/MyPagination";
import { propTypes } from "react-bootstrap/esm/Image";

class Questions {
  constructor(
    questionId,
    questionNumber,
    questionText,
    choices,
    selectedChoice,
    correctChoice
  ) {
    this.questionId = questionId;
    this.questionNumber = questionNumber;
    this.questionText = questionText;
    this.choices = choices;
    this.selectedChoice = selectedChoice;
    this.correctChoice = correctChoice;
  }
}

class Choices {
  constructor(leading, choiceText) {
    this.leading = leading;
    this.choiceText = choiceText;
  }
}

let questions = [
  new Questions(
    "q1",
    "1",
    "Do you think you can do this?",
    [
      new Choices("a", "Yes"),
      new Choices("b", "No"),
      new Choices("c", "Yes and No"),
      new Choices("d", "No and Yes"),
    ],
    "No choice",
    "b"
  ),
  new Questions(
    "q2",
    "2",
    "When were you born",
    [
      new Choices("a", "3000"),
      new Choices("b", "4000"),
      new Choices("c", "5000"),
      new Choices("d", "6000"),
    ],
    "No choice",
    "b"
  ),
  new Questions(
    "q3",
    "3",
    "How are you?",
    [
      new Choices("a", "Yes"),
      new Choices("b", "No"),
      new Choices("c", "Yes and No"),
      new Choices("d", "No and Yes"),
    ],
    "No choice",
    "b"
  ),
  new Questions(
    "q4",
    "4",
    "What is your phone number?",
    [
      new Choices("a", "Yes"),
      new Choices("b", "No"),
      new Choices("c", "Yes and No"),
      new Choices("d", "No and Yes"),
    ],
    "No choice",
    "b"
  ),
  new Questions(
    "q5",
    "5",
    "Where do you live?",
    [
      new Choices("a", "Yes"),
      new Choices("b", "No"),
      new Choices("c", "Yes and No"),
      new Choices("d", "No and Yes"),
    ],
    "No choice",
    "b"
  ),
  new Questions(
    "q6",
    "6",
    "What is your name?",
    [
      new Choices("a", "Yes"),
      new Choices("b", "No"),
      new Choices("c", "Yes and No"),
      new Choices("d", "No and Yes"),
    ],
    "No choice",
    "b"
  ),
];

const QuizBody = (props) => {
  const [empty, setEmpty] = useState(false)
  const [state, setState] = useState({
    suaaloyin: questions,
    currentPage: 1,
    questionsPerPage: 2,
  });
  // warning: don't call this function, it may cause some problems
  const setSelectedChoice = (questionId, selectedChoice) => {

    let newQuestions = questions;

    for (var i = 0; i < questions.length; i++) {
      if (questions[i].questionId === questionId) {
        console.log(newQuestions[i].selectedChoice);
        newQuestions[i].selectedChoice = selectedChoice;
        break;
      }
    }
    setState((prevState) => {
      return { ...prevState, suaaloyin: newQuestions };
    });
    console.log(state.suaaloyin);
  };

  const indexOfLastQuestion = state.currentPage * state.questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - state.questionsPerPage;
  const currentQuestions = questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );
  function pageChangeHandler(event, value) {
    setState((prevState) => {
      return { ...prevState, currentPage: value };
    });
  }

  const numberOfPages = questions.length / state.questionsPerPage;
  console.log(questions.length / state.questionsPerPage);

  function submitHandler (){
    console.log("testing")
    console.log(questions.length)
    
    //catching the correct choices
    let correct = 0
    for (var i = 0; i < questions.length; i++) {
      if (questions[i].selectedChoice === "b") {
        console.log("finally in the for")
        correct += 1
      }
    }
    props.onSubmit(questions.length, (questions.length - correct), correct, state.suaaloyin)


  }
  return (
    <React.Fragment>
      <div className="bodyCard">
        <h2> Choose the best answer </h2>
        {currentQuestions.map((question) => (
          <Question value={question} onSelected={setSelectedChoice} />
        ))}
        
        {(state.currentPage === 3 && empty) && ( <p style = {{margin: "0", color: "red"}}> There are empty questions </p>)}
        {state.currentPage === 3  && (
          <Button
            onClick = {submitHandler}
            style={{ backgroundColor: "#00308F", width: "170px" }}
            size="large"
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
        )}
        <MyPagination onPageChange={pageChangeHandler} count={numberOfPages} />
      </div>
    </React.Fragment>
  );
};

export default QuizBody;
