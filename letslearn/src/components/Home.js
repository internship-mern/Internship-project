import React from 'react'
import '../styles/home.css'
import '../scroll.js'
import {FaDesktop,FaFileAlt,FaFileVideo,FaLaptopCode,FaFacebookMessenger,FaFolder} from 'react-icons/fa'

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

             <h2> <FaDesktop className='card-icons'/> Quiz / Online Assesments</h2>

           </div>
           <div className='cards'>
             <h2> <FaFolder className='card-icons'/>Files & Documents</h2>
           </div>
           <div className='cards'>
              <h2><FaFileVideo className='card-icons'/>Lectures</h2>
           </div>
           <div className='cards'>
              <h2><FaLaptopCode  className='card-icons'/> Programming Languages <br/> &
                Tutorials
              </h2>
           </div>
           <div className='cards'>
              <h2> <FaFacebookMessenger  className='card-icons'/>Chats & Messages</h2>  
           </div>
           <div className='cards'>
              <h2> <FaFileAlt  className='card-icons'/>OD / Leave Form </h2>
           </div>
       </div>
    </div>
  )
}

export default Home