import React from 'react'
import '../styles/Header.css'
const Header = () => {
  return (
    <>
    <div className='header'>
        <div className='logo-container'>
           <h3 id='logo'>Logo</h3>
        </div> 
        <div id='login-container'>
         <a href='/login'>Login</a>
        </div>
    </div>
    </>
  )
}

export default Header