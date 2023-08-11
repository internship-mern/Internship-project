import axios from "axios";
const url = "http://localhost:5000";

const loginApi = async (
  username,
  password,
  setInfo,
  setLoggedin
) => {
  
  await axios
    .post(`${url}/login`, { username, password }, { withCredentials: true })
    .then((data) => {
      setInfo(data.data);
      if (data.status === 200) {
        setLoggedin(true);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
export { loginApi };

const signupApi = async (username, password, key, setStatus) => {
  await axios
    .post(`${url}/register`, { username, password, key })
    .then((data) => {
      setStatus(data.data);
    });
};
export { signupApi };

const getloggedin = async (setInfo,setLoggedin) => {
  await axios
    .post(`${url}/profile`, {}, { withCredentials: true })
    .then((data) => {
     if(data.data!=="")
     {
      setInfo(data.data);
      setLoggedin(true);
     }
      
    });
};
export { getloggedin };

const logout = async () => {
  await axios.post(`${url}/logout`, {}, { withCredentials: true });
};
export { logout };

const newmessage=async(message,sendby)=>
{
   await axios.post(`${url}/newmessage`,{message , sendby},{withCredentials:true}).then((data)=>
   {
     if(data.status!==200)
     {
      console.log(data.data);
     }
   })
}
export {newmessage}

const allmessages=async(setMessages)=>
{
  await axios.get(`${url}/allmessages`,{withCredentials:true}).then((data)=>
  {
    if(data.status===200)
    {
      setMessages(data.data)
    }
  })
}
export {allmessages}