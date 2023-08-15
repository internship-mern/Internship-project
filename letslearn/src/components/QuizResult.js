import React from 'react'
import '../styles/Quiz.css'

function QuizResult(props) {
  return (
    <>
    <div className='result'>
    <div className='show-score'>
        Your Score:{props.score}<br/>
        Total Score:{props.totalScore}
    </div>
    <br/>
    <div>
     <button id="next-button2" onClick={props.tryAgain}>Try Again</button>
    </div>
    </div>
    
    </>
  )
}

export default QuizResult