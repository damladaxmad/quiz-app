import React, { useState, useEffect } from "react";
import { RadioGroup, Button, Radio } from "@material-ui/core";
import "./Question.css";
import Leading from "./UI/Leading";





const Choice = (props) => {
  const [clicked, setClicked] = useState(false)
  const [choice, setChoice] = useState(props.question.selectedChoice);
  
  function radioHandler () {
    setClicked(true)
  }

  function groupRadioHandler(e) {
    
    console.log(clicked)
    setChoice(e.target.value)
    props.onSelected(props.question.questionId, e.target.value)
      
  }

  return (
    <React.Fragment>
      <RadioGroup 
        className="group"
        value={choice}
        onChange={(e) => groupRadioHandler(e)}
      >
        <div
          className="answer"
          style={{
            backgroundColor: choice === props.value.leading ? "lightGreen" : "white",
          }}
        >
          <Leading
            content={props.value.leading}
            midab= {choice === props.value.leading ? "green" : "grey"}
          />
          <label style={{ color: "black" }}> {props.value.choiceText} </label>
          <Radio 
            value={props.value.leading}
            onClick={radioHandler}
          />
        </div>
        
        
      </RadioGroup>
    </React.Fragment>
  );
};

export default Choice;
