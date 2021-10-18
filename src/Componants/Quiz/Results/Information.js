import React from "react";
import { Radio } from "@material-ui/core";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Leading from "../QuizBody/UI/Leading";

const Information = (props) => {

  return (
    <React.Fragment>
      <div className="infoContainer">
        <div className="questionsContainer">
          <Leading midab="#00308F" content={props.value.questionNumber} />
          <div
            style={{
              fontSize: "bold",
              backgroundColor: (props.value.selectedChoice === props.value.correctChoice) ? "white" : "#A55D35",
              padding: "15px",
              width: "80%",
              borderRadius: "12px",
              boxShadow: "0 1px 8px rgba(0, 0, 0, 0.5)",
            }}
          >
            <p style={{ color:  props.value.selectedChoice === props.value.correctChoice
            ? "black" : "white",fontSize: "26px", fontWeight: "bold", margin: "0px" }}>
              {props.value.questionText}
            </p>
          </div>
        </div>

        <div className="questionsContainer">
          <div
            style={{
              width: "70%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
              {(props.value.selectedChoice === props.value.correctChoice) ?
            <div
              style={{
                gap: "7px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Radio checked={true} />{" "}
              <p style={{ fontWeight: "bold" }}>
                {" "}
                {props.value.selectedChoice}
              </p>
              <CheckBoxIcon
                style={{ color: "green", marginTop: "14px", marginLeft: "10px" }}
              />
            </div> : <div
              style={{
                gap: "7px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Radio checked={true} />{" "}
              <p style={{ fontWeight: "bold" }}>
                {" "}
                {props.value.selectedChoice}
              </p>
              <CancelIcon
                style={{ color: "red", marginTop: "14px", marginLeft: "10px" }}
              />
            </div>}

            {(props.value.selectedChoice !== props.value.correctChoice) && 
            <div style={{ display: "flex", flexDirection: "row" }}>
              <Radio checked={false} />{" "}
              <p style={{ fontWeight: "bold" }}> {props.value.correctChoice}</p>
              <CheckBoxIcon
                style={{
                  color: "green",
                  marginTop: "14px",
                  marginLeft: "23px",
                }}
              />
            </div>}
          </div>
        </div>
        <div></div>
        {props.value.selectedChoice === props.value.correctChoice ?  <CheckBoxIcon
                style={{
                  color: "green",
                  marginTop: "14px",
                  marginLeft: "96%"
                }}
              /> : <CancelIcon style={{ color: "red", marginLeft: "96%" }} />}
        
      </div>
    </React.Fragment>
  );
};

export default Information;