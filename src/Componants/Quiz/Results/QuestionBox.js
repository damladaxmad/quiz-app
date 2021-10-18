import React from "react";
const QuestionBox = (props) => {
  return (
    <React.Fragment>
      <div
        style={{
          borderRadius: "24px",
          boxShadow: "0 1px 8px rgba(0, 0, 0, 0.25)",
          backgroundColor: "#00308F",
          width: "60%",
          height: "200px",
          alignItems: "center",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          padding: "1rem",
          // gap: "5px",
          color: "grey",
        }}
      >
        <div
          style={{
            borderRadius: "8px",
            backgroundColor: "white",
            width: "40px",
            height: "40px",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "1rem",
            color: "blue",
            fontSize: "16px",
          }}
        >
         {props.icon}
        </div>
        <div>
          <p style={{ margin: "0",fontWeight: "bold", fontSize: "26px", color: "white" }}>
            {props.number}
          </p>
        </div>
        <div>
          <p style={{ margin: "0", fontWeight: "bold", fontSize: "26px", color: "lightGrey" }}>
          {props.description}
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuestionBox;
