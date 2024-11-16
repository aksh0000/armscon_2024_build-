import React, { useState, useEffect, useRef } from "react";
import "./Chat.css";
import { Button } from "@mui/material";

const Chat = () => {
  const [ws, setWs] = useState(null);
  const [gender, setGender] = useState("");
  const [connected, setConnected] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const [message, setMessage] = useState("");
  const chatBoxRef = useRef(null); // Create a ref for the chat box

  useEffect(() => {
    if(localStorage.getItem('loggedin')){
    const socket = new WebSocket("wss://www.armscon.org.in:5000");
    setWs(socket);

    socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data.type === "message") {
        setChatMessages((prev) => [
          ...prev,
          { text: data.message, sender: "stranger" },
        ]);
      }
    };

    return () => socket.close();
  }
  else{
    alert("You are not logged in!!")
    window.location.href="/"
  }
  }, []);

  useEffect(() => {
    // Scroll to the bottom when chatMessages change
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const startChat = () => {
    ws.send(JSON.stringify({ type: "setGender", gender }));
    setConnected(true);
  };

  const sendMessage = () => {
    if (message.trim()) {
      ws.send(JSON.stringify({ type: "message", message }));
      setChatMessages((prev) => [
        ...prev,
        { text: message, sender: "you" },
      ]);
      setMessage("");
    }
  };

  const skipChat = () => {
    setChatMessages([]);
    ws.send(JSON.stringify({ type: "next" }));
  };

  return (
    <div id="speed_dating_container">
      {!connected ? (
        <div>
          <header>
            <h1>ARMSCON</h1>
            <p>Aap ARMSCON m akele bhalehi aaye ho but aap akele jaoge nahi!!!</p>
          </header>
          <section>
            <article>
              <h3>Your gender:</h3>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  onChange={(e) => setGender(e.target.value)}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  onChange={(e) => setGender(e.target.value)}
                />
                Female
              </label>
            </article>
            <Button
              onClick={startChat}
              variant="contained"
              color="secondary"
              fullWidth
            >
              Start Chat
            </Button>
          </section>
        </div>
      ) : (
        <div id="armscon_chat_container">
          <h2 style={{textAlign:'center'}}>ARMSCON CHAT</h2>
          <br/>
          <div id="disclaimer">
            <p id="rrr_disclaimer">
              Please don’t share your personal information on this platform with
              random people. If any mishappening occurs, the ARMSCON team is not
              responsible for it.
            </p>
          </div>
          <br/>
          <div id="chatBox" ref={chatBoxRef}>
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={msg.sender === "you" ? "yourMessage" : "strangerMessage"}
              >
                {msg.sender === "you" ? "You: " : "Stranger: "}
                {msg.text}
              </div>
            ))}
          </div>
          <div id="inputArea">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <Button onClick={sendMessage} variant="contained" color="primary">
              Send
            </Button>
            <Button
              onClick={skipChat}
              variant="contained"
              color="secondary"
              style={{ marginLeft: "10px" }}
            >
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
