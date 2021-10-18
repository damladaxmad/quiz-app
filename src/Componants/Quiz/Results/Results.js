import React, { useState, useEffect } from "react";
import { RadioGroup, Button, Radio } from "@material-ui/core";
// import CancelIcon from '@material-ui/icons/Cancel';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Information from "./Information";
import IconsCancel from "./Icons";


import "./Results.css";
import QuestionBox from "./QuestionBox";
import GradingBox from "./GradingBox";
const Results = (props) => {
    console.log("in the results")
    console.log(props.questions)
    window.scroll(0,0)
    let grade = "A"
      if (props.percentage > 89 && grade <101){
        grade = "A";
      }
 
      if (props.percentage > 79 && grade <90){
        grade = "B";
      }
        
      if (props.percentage > 69 && grade <80){
        grade = "c";

      }
       
      if (props.percentage > 59 && grade <70){
        grade = "D";
      }
      
      if (props.percentage < 60){
        grade = "F";
      }
        


    console.log(grade)
  return (
    <React.Fragment>
      <div className="bodyCard">
        <h1>YOUR RESULTS</h1>
        <div className="aboveContainer">
          <div className="questionsContainer">
            <QuestionBox icon = {<p style = {{margin: "0", fontWeight: "bold", fontSize: "32px", color: "blue"}}> ? </p>} description = "Questions" number = {props.questionNumber} />
            <QuestionBox icon = {<IconsCancel />} description = "WRONG" number = {props.wrong} />
            <QuestionBox icon = {<CheckBoxIcon style = {{color: "green"}}fontSize = "large" color = "secondary"/>} description = "CORRECT" number = {props.correct}/>
          </div>
          <div className="gradingContainer">
          <GradingBox number = {props.percentage} description = "PERCENTAGE" />
          <GradingBox number = {grade} description = "GRADE"/>

          </div>
        </div>
        <h1> INFORMATION </h1>

        {props.questions.map(question=> <Information value = {question}/>)}

        
      </div>
    </React.Fragment>
  );
};

export default Results;
