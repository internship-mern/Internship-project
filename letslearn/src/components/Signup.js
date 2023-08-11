import React, { useState } from "react";
import "../styles/Login.css";
import { signupApi } from "../api/client";
import { Navigate } from "react-router-dom";


const Signup = ({ err, setErr }) => {
 
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setrePassword] = useState("");
  const [key, setKey] = useState("");
  const [status,setStatus]=useState('')

  // const handleResponse = (status) => {
  //   if (status === "User Created") {
  //     <Navigate to={"/login"} />;
  //   } else if (status === "Failed to create user") {
  //     setErr("Failed to create user, Please try again later");
  //   } else if (status === "user found") {
  //     setErr("User Already exist. Please Login..!");
  //   }
  // }


  const handleSubmit = async (e) => {
    // setErr("")
    e.preventDefault();
    const t = document.getElementById("nature");
    await setKey(t.value);
    if (username === "" || password === "" || repassword === "") {
      setErr("Please fill all the fields..!");
    } else if (password !== repassword) {
      setErr("Password and Confirm-Password doesn't Match..!");
    } else {
      //setStatus()
      
       await signupApi(username, password, key,setStatus).then(()=>
       {

        if (status === "User Created") {
         setErr("User created")
        } else if (status === "Failed to create user") {
          setErr("Failed to create user, Please try again later");
        } else if (status === "user found") {
          setErr("User Already exist. Please Login..!");
        }
       })
         
    }
  };
 
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Create your account.</h2>
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
        <label for="retypepassword">Confirm Password</label>
        <input
          type="password"
          name="user-password"
          id="retypepassword"
          value={repassword}
          onChange={(e) => setrePassword(e.target.value)}
        />
        <select id="nature">
          <option value="staff">Staff</option>
          <option value="student">Student</option>
        </select>
        <br />
        <div class="button">
          <button type="submit">Signup</button>
        </div>
      </form>

      <div id="Err">
        <h2>{err}</h2>
      </div>
    </div>
  );
};

export default Signup;
