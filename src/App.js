import React, {useState} from "react";
import QuizPage from "./Componants/Quiz/QuizPage";
import "./App.css";
import SignUp from "./Componants/Registration/SignUp";
import LogIn from "./Componants/Registration/LogIn";
function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const signupSwitchHandler = () =>{
    console.log("switching to login")
    setIsLogin(true)
  }
  const loginSwitchHandler = () =>{
    console.log("switching to signUp")
    setIsLogin(false)
  }
  const routIt = () =>{
    console.log("page routed")
    setIsSubmitted(true)
  }

  
  return ( <React.Fragment>
{(!isLogin && !isSubmitted) && <SignUp onSubmit = {routIt} onClick = {signupSwitchHandler}/>}
{(isLogin && !isSubmitted) && <LogIn onSubmit = {routIt} onClick = {loginSwitchHandler}/>}
{isSubmitted && <QuizPage/>}
  </React.Fragment>
   
  );
}

export default App;
