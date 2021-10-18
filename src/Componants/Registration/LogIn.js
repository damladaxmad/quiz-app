import "./LogIn.css";
import { TextField, Button } from "@material-ui/core";

const LogIn = (props) => {

  console.log("in login");
  const switchHandler = () => {
    props.onClick();
  };

  const goToQuizPage = () => {
    props.onSubmit();
  };
  
  return (
    <div className="card">
      <div className="lSwitch">
        <div onClick={switchHandler} className="lSignup">
          SignUp
        </div>
        <div className="login"> LogIn</div>
      </div>
    
      <TextField
        className="hot"
        placeholder="Enter your email"
        type="email"
        variant="outlined"
      />
      <TextField
        className="hot"
        placeholder="Enter your password"
        type="password"
        variant="outlined"
      />
      <Button
        mt={5}
        onClick = {goToQuizPage}
        style={{ width: "250px", marginTop: "20px", color: "white", backgroundColor: "#00308F" }}
        size="large"
        color="primary"
        variant="contained"
      >
        LOG IN
      </Button>
    </div>
  );
};

export default LogIn;
