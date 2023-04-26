import { useState } from "react"

const Score = (props) => {

    //Array destructuring
    const [score, setScore] = useState(0)

    // Add score 
    const addScore = () => {setScore(score + 100)}

    // Subtract score
    const subScore = () => {setScore(score - 100)}

    const resetScore = () => {setScore(0)}

    return (
        <div className="score-container">
            <h2>Score: { score } </h2>
            <section>
                <button onClick={subScore}>Decrease</button>
                <button onClick={resetScore}>Reset</button>
                <button onClick={addScore}>Increase</button>
            </section>
        </div>
    )
}

export default Score