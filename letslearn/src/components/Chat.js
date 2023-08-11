import React, { useContext, useEffect, useState } from "react";
import "../styles/Chat.css";
import { userContext } from "./userContect";
import { newmessage, allmessages } from "../api/client";

const Chat = () => {
  const { userInfo, setMessages, messages } = useContext(userContext);
  const [nmessage, setnMessage] = useState("");
  useEffect(() => {
    allmessages(setMessages);
  }, [setMessages,messages]);
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(nmessage, userInfo.username);
    if(nmessage !==" ")
    {
    newmessage(nmessage, userInfo.username);
    setnMessage("");
    }
  };

  return (
    <div>
      <div id="chat-container">
        <div id="chat-title">Group Chat</div>
        <div id="chat-messages">
          {Object.keys(messages).length !== 0 ? (
            messages.map((messag)=>
            <div className={(messag.sendby === userInfo.username)? "message-others" : "message-own"}>
               <div class="chat-message-own" key={messag._id}>
                <div class="chat-message-name">{messag.sendby} <h2>{messag.date}</h2></div>
                <div class="chat-message-content">{messag.message}</div>
              </div>
            </div>
            )
          ) : (
            <div>Loading Data..!</div>
          )}
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
