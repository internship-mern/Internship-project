import React from 'react'
import '../styles/Header.css'
import {FaUserCircle} from 'react-icons/fa'
const Header = () => {
  return (
    <>
    <div className='header'>
        <div className='logo-container'>
           <a href='/' id='logo'>Logo</a>
        </div> 
        <div id='login-icon-container'>
        <FaUserCircle id='login-icon'/>
        </div>
        <div id='login-container'>
         <a href='/login'>Login</a>
        </div>
        
    </div>
    </>
  )
}

export default Header