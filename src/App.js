import React, { useState, useEffect } from "react";
import "./App.css";
import TextInput from "./Components/Input";
import ConversationField from "./Components/ConversationField";
import moment from "moment";
import Socket from "./utils/socket";
import OnlineUsers from "./Components/OnlineUsers";

function App() {
  const [textInput, setTextInput] = useState("");
  const [char, setChar] = useState(false);
  const [username, setUsername] = useState();
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState();
  const [conversation, setConversation] = useState([
    {
      username: "Edwind",
      message: "What did the ocean say to another ocean?",
      timestamp: 1544532325758,
    },
    { username: "Liren", message: "sea you later?", timestamp: 1544532341078 },
    {
      username: "Edwind",
      message: "Nothing. It just waved",
      timestamp: 1544532347412,
    },
    {
      username: "Josh",
      message: "I'm leaving this chatroom",
      timestamp: 1544532402998,
    },
  ]);

  useEffect(() => {
    Socket.emit("NEW_USER");

    Socket.on("GET_CURRENT_USER", (user) => {
      // think about what to do here
      // setUsername(randomName[randomNum]);
      // console.log(username);
      setUsername(user.username);
    });

    Socket.on("UPDATE_USER_LIST", (users) => {
      // think about what to do here
      setUsers(users);
    });
  }, []);

  // useEffect(() => {
  //   Socket.on("RECEIVE_BROADCAST", (data) => {
  //     // think about what to do here
  //     console.log("RECEIVE BROADCAST:");
  //     console.log(data);
  //     let copy = [...conversation];
  //     let newItem = {
  //       username: data.username,
  //       message: data.textInput,
  //       timestamp: data.timestamp,
  //     };

  //     copy.push(newItem);
  //     setConversation(copy);
  //     console.log(conversation);
  //   });
  // }, [message]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (textInput !== "") {
      const data = {
        username: username,
        message: textInput,
        timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
      };

      Socket.emit("BROADCAST_MESSAGE", data);

      let copy = [...conversation];
      copy.push(data);
      setConversation(copy);

      setTextInput("");
    }
  };

  const handleInputText = (e) => {
    if (e.target.value.length > 500) {
      setChar(true);
    } else {
      setChar(false);
    }
    if (setChar) {
      setTextInput(e.target.value);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
      }}
      className="App"
    >
      <OnlineUsers users={users} />
      <div style={{ marginLeft: "10%" }}>
        <ConversationField username={username} conversation={conversation} />
        <TextInput
          setUsername={setUsername}
          username={username}
          char={char}
          textInput={textInput}
          sendMessage={sendMessage}
          setTextInput={setTextInput}
          handleInputText={handleInputText}
        />
      </div>
    </div>
  );
}

export default App;
