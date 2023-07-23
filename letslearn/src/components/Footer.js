import React from 'react'
import '../styles/Footer.css'
import {FaInstagram,FaTwitter,FaFacebookSquare} from 'react-icons/fa'


const Footer = () => {
  return (
    <div id='footer-container'>
      <div id='footer-content'>
          <h3>&copy; Copyright 2023</h3>
          <FaInstagram className='footer-icons'/>
          <FaTwitter className='footer-icons'/>
          <FaFacebookSquare className='footer-icons'/>
      </div>
    </div>
  )
}

export default Footer