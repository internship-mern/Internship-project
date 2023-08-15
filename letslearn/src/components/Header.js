import React, { useContext, useEffect } from 'react'
import '../styles/Header.css'
import {FaUserCircle} from 'react-icons/fa'
import { userContext } from './userContect';
import { getloggedin, logout } from '../api/client';
const Header = () => {
  const { userInfo, setInfo,setLoggedin} = useContext(userContext);
  useEffect(() => {
    getloggedin(setInfo,setLoggedin);
  }, [setInfo,setLoggedin]);
   const logt=(e)=>
   {
     e.preventDefault();
     logout();
     setInfo({});
     setLoggedin(false);
    
   }
  return (
    <>
      <div className="header">
        <div className="logo-container">
          <a href="/" id="logo">
            Let's Learn..
          </a>
        </div>
        {userInfo.username && (
          <div id="login-container">
            <a href='/' onClick={logt}>Logout</a>
          </div>
        )}
        <div id="login-icon-container">
          <FaUserCircle id="login-icon" />
        </div>
        {(userInfo.username)?
        (
         <div id='login-container'>
         <a>{userInfo.username}</a>
        </div>
        ):
        <div id='login-container'>
         <a href='/'>Login</a>
        </div>
        }
        
        
    </div>
    </>
  );
};

export default Header;
