import { useEffect, useState } from "react"
import trebek from "../images/trebek.png"

const Question = (props) => {

    // Random question API url
    const url = "http://jservice.io/api/random"

    // Set state
    const [question, setQuestion] = useState()
        // set SECOND state with answer
    const [showAnswer, setAnswer] = useState(false)

    const getQuestion = async () => {
        // fetch API
        const response = await fetch(url)
        // get question
        const data = await response.json()
        // set state to question
        setQuestion(data)
            // and answer
        setAnswer(false)
    }

    useEffect(() => {
        getQuestion()
    }, [])

    // define toggle function
    const toggleAnswer = () => setAnswer(!showAnswer)

    const Loaded = () => {    
        return (
            <div className="question-container">
                <div className="image-container">
                    <img src={trebek}></img>
                </div>
                <h2>Let's Play!</h2>
                <section className="question-button">
                    <button onClick={getQuestion}>Get Answer</button>
                </section>
                <div className="question-h3-container">
                    <h3> Category: {question[0].category.title} </h3> 
                    <h3> Points: {question[0].value} </h3>
                    <h3> Answer: {question[0].question} </h3>
                </div>
                <section className="answer-container">
                    <button onClick={toggleAnswer}>Get Question</button>
                </section>
                {showAnswer && <h3> {question[0].answer} </h3>}
            </div>
        )
    }

    const Loading = () => <h1>Loading...</h1>

    return question ? <Loaded /> : <Loading />
}

export default Question