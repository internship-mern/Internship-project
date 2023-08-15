import React, { useContext, useEffect, useRef, useState } from "react";
import "../styles/Chat.css";
import { userContext } from "./userContect";
import { newmessage, allmessages,deleteMessages } from "../api/client";
import {FaRegTrashAlt} from 'react-icons/fa'

const Chat = () => {
  const { userInfo, setMessages, messages,temp,setTemp} = useContext(userContext);
  const [nmessage, setnMessage] = useState("");
  const scrollContainerRef = useRef(null);
  const bottomElementRef = useRef(null);

  useEffect(() => {
    allmessages(setMessages);
    if(temp)
    {
      if (bottomElementRef.current) {
        bottomElementRef.current.scrollIntoView({
          behavior: 'auto',
          block: 'end',
        });
      }
      setInterval(()=>
       setTemp(false)
      ,3000)
    }
  }, [setMessages,messages]);
   
  const handleSubmit = async(e) => {
    e.preventDefault();
    if (nmessage !== " ") {
      await newmessage(nmessage, userInfo.username,setTemp,setMessages)
      setnMessage("");
    }    
  };

  const deleteMessage=async (_id)=>
  {
    await deleteMessages(_id,setMessages)
  }

  return (
    <div>
      <div id="chat-container" ref={scrollContainerRef}>
        <div id="chat-title">Group Chat</div>
        <div id="chat-messages">
          {Object.keys(messages).length !== 0 ? (
            messages.map((messag) => (
              <div
                className={
                  messag.sendby === userInfo.username
                    ? "message-own"
                    : "message-others"
                }
                key={messag._id}
              >
                <div className="chat-message-own" >
                  <div className="chat-message-name">
                    {messag.sendby} <h2>{messag.date}</h2>
                    <h2>
                      <FaRegTrashAlt className="del-icon" onClick={e=>deleteMessage(messag._id)}/>
                    </h2>
                  </div>
                  <div className="chat-message-content">
                     {messag.message}
                    </div>
                </div>
               
              </div>
              
            ))
          ) : (
            <div>Loading Data..!</div>
          )}
        <div ref={bottomElementRef}></div>
        </div>
        <div id="chat-input">
          <input
            type="text"
            placeholder="Type Something..."
            value={nmessage}
            onChange={(e) => setnMessage(e.target.value)}
          ></input>
          <button type="submit" onClick={handleSubmit}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
