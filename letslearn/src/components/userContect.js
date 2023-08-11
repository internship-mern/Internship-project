import { createContext, useState } from "react";

export const userContext=createContext();

export function UserContextProvider({children})
{
    const [userInfo,setInfo]=useState({})
    const [loggedin,setLoggedin]=useState(false)
    const [err,setErr]=useState("")
    const [messages,setMessages]=useState({})

    return(
        <userContext.Provider value={{err,setErr,userInfo,setInfo,loggedin,setLoggedin,messages,setMessages}}>
            {children}
        </userContext.Provider>
    )
}