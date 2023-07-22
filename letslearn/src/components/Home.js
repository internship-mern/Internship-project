import React from 'react'
import '../styles/home.css'
import '../scroll.js'

const Home = () => {
  return (
    <div id='home-container'>
       <div id='welcome-text-container'>
         <h2 id='welcome-text'>Welcome Student</h2>
         <h2 id='Quote'>Quote - “Opportunities don't happen, you create them.”</h2>
       </div>
       <hr/>
       <div id='cards-container'>
           <div className='cards'>
             <h2>Quiz / Online Assesments</h2>
           </div>
           <div className='cards'>
             <h2>Files & Documents</h2>
           </div>
           <div className='cards'>
              <h2>Lectures</h2>
           </div>
           <div className='cards'>
              <h2>Programming Languages <br/> &
                Tutorials
              </h2>
           </div>
           <div className='cards'>
              <h2>Chats & Messages</h2>  
           </div>
           <div className='cards'>
              <h2>OD / Leave Form </h2>
           </div>
       </div>
    </div>
  )
}

export default Home