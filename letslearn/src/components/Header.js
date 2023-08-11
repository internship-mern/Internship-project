import React from 'react'
import '../styles/Header.css'
import {FaUserCircle} from 'react-icons/fa'
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
        <div id='login-container'>
         <a href='/login'>Login</a>
        </div>
        
    </div>
    </>
  );
};

export default Header;
