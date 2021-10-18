import React from 'react'

const Suaal = (props)=>{
    return <React.Fragment>
        <div style = {{
        backgroundColor: "#00308F",
        display: "flex",
        fontSize: "20px",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "5px",
        padding: "0.4rem",
        height: "28px",
        width: "26px",
        color: "white",}}> {props.value.questionNumber} </div>
        {props.value.questionText}
        </React.Fragment>
}

export default Suaal;


