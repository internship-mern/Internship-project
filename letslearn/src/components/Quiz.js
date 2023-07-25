import React from 'react'
import '../styles/Quiz.css'

const Quiz = () => {
  return (
    <div>
      <div id='quiz-container'>
        <div id='quiz-title-container'>
         <div id='Quiz-title'>Title</div>
         <div id='Quiz-time'>19h.12m.13s</div>
        </div>
        <div id='quiz-lines-container'>
          <div className='quiz-lines-box'>1</div>
          <div className='quiz-lines-box'>2</div>
        </div>
        
      </div>
    </div>
  )
}

export default Quiz
