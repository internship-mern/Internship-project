import React, { useContext, useEffect, useState } from "react";
import "../styles/Header.css";
import { FaUserCircle } from "react-icons/fa";
import { getloggedin, logout } from "../api/client";
import { userContext } from "./userContect";
import { Navigate } from "react-router-dom";

const Header = () => {
  const { userInfo, setInfo,setLoggedin} = useContext(userContext);
  useEffect(() => {
    getloggedin(setInfo,setLoggedin);
  }, [setInfo]);
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
            <a onClick={logt}>Logout</a>
          </div>
        )}
        <div id="login-icon-container">
          <FaUserCircle id="login-icon" />
        </div>
        <div id="login-container">
          {!userInfo.username && <a href="/">Login</a>}
          {userInfo.username && <a href="/Home">{userInfo.username}</a>}
        </div>
      </div>
    </>
  );
};

export default Header;
