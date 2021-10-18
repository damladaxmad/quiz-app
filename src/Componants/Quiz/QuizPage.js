import React, {useState} from 'react'
import Header from './Header/Header';
import QuizBody from './QuizBody/QuizBody';
import Results from './Results/Results';


const QuizPage = () =>{
    const [submitted, setSubmitted] = useState(false)
    const [choices, setChoices] = useState(false)
    const [myQuestions, setMyquestions] = useState([])
    const [dataToResult, setDataToResult] = useState(
        {
            questionNumber: 42,
            wrong: 4,
            correct: 8,
            percentage: "60%"
        }
    )
    console.log(dataToResult.questionNumber)

    const submitHandler = (total, wrong, correct, questions)=> {
        setMyquestions(questions)
        setSubmitted(true)
        const percent = (correct * 100 / total)
        setDataToResult({
            questionNumber: total,
            wrong: wrong,
            correct: correct,
            percentage: Math.round(percent)
        })
        // console.log(dataToResultPage)
    }

return <React.Fragment>
    <Header/>
    {!submitted && <QuizBody onSubmit = {submitHandler}/> }
    {submitted && <Results questions = {myQuestions} questionNumber = {dataToResult.questionNumber}
    wrong = {dataToResult.wrong}
    correct = {dataToResult.correct}
    percentage = {dataToResult.percentage}/>}
   
</React.Fragment>
}

export default QuizPage;