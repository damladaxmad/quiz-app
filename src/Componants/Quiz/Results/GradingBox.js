import React from 'react'
const GradingBox = (props) =>{
    return <React.Fragment>
        <div style = {{
            borderRadius: "24px",
            boxShadow: "0 1px 8px rgba(0, 0, 0, 0.25)",
            backgroundColor: "#00308F",
            width: "30%",
            height: "120px",
            alignItems: "center",
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "1rem",
            // gap: "5px",
            color: "grey",
            margin: "auto",
        }}><div>
        <p style={{ margin: "10px",fontWeight: "bold", fontSize: "26px", color: "white" }}>
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
}

export default GradingBox;