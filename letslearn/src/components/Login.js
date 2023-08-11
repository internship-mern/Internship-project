import React, { useContext, useEffect } from "react";
import "../styles/Login.css";
import { loginApi } from "../api/client";
import { useState } from "react";
import { userContext } from "./userContect";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { err,userInfo, setErr, setInfo,loggedin, setLoggedin } =
    useContext(userContext);
  const Loginapi = async (e) => {
    document.getElementById("loading").style.display = "block";
    e.preventDefault();
    if (username !== "" && password !== "") {
      await loginApi(username, password, setInfo,setLoggedin);
    } else {
      document.getElementById("loading").style.display = "none";
      setErr("Please Fill all the details!..");
    }
  };
  if (loggedin) {
    console.log(loggedin)
    return <Navigate to={"/home"} />;
  }
  return (
    <div>
      <form onSubmit={Loginapi}>
        <h2>Welcome to Let's Learn.</h2>
        <br />

        <label for="username">User name</label>
        <input
          type="text"
          name="user-name"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label for="userpassword">Password</label>
        <input
          type="password"
          name="user-password"
          id="userpassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <Link to={"/signup"}>Signup</Link> */}
        <div id="loading"></div>
        <br />

        <div className="button">
          <button type="submit">Login</button>
        </div>
      </form>
      <div id="Err">
        <h2>{err}</h2>
      </div>
    </div>
  );
};
export default Login;
