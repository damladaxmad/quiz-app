import "./SignUp.css";
import { TextField, Button } from "@material-ui/core";
import React from "react";

const SignUp = (props) => {
    console.log("in signUp")
  const switchHandler = () => {
    props.onClick();
  };
  const goToQuizPage = () => {
    props.onSubmit();
  };
  return (
    <React.Fragment>
       <div className="card">
      <div className="sSwitch">
        <div className="signup"> SignUp</div>
        <div onClick={switchHandler} className="sLogin">
          {" "}
          LogIn
        </div>
      </div>

      <TextField
        className="hot"
        type ="text"
        placeholder="Enter your name"
        variant="outlined"
      />
      <TextField
        className="hot"
        placeholder="Enter your email"
        type = "email"
        variant="outlined"
      />
      <TextField
        className="hot"
        placeholder="Enter your password"
        type = "password"
        variant="outlined"
      />
      <Button
      onClick = {goToQuizPage}
        mt={5}
        style={{ width: "250px", marginTop: "20px", color: "white", backgroundColor: "#00308F" }}
        size="large"
        color="primary"
        variant="contained"
      >
        SIGN Up
      </Button>
    </div>

    </React.Fragment>
   
  );
};

export default SignUp;
