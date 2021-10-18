import React, { useState } from "react";
import "./Question.css";
import Choice from "./Choices";
import Suaal from "./Suaal";

const Question = (props) => {
  const id = Math.random().toString()
  console.log(id)

  let myChoices = props.value.choices

  const onSelect = (questionId, selctedChoice) =>{
    props.onSelected(questionId, selctedChoice)
    // console.log(questionId)
    // console.log(selctedChoice)
  }

  return (
    <React.Fragment>
      <div className="questionBody">
        <div className="wrapper">
          <div className="question">
            <Suaal value = {props.value}/>
          </div>
          {myChoices.map(choice => <Choice question = {props.value} value = {choice}
          onSelected = {onSelect} key = {Math.random().toString()}/> )}
            
          
        </div>
      </div>
    </React.Fragment>
  );
};

export default Question;
