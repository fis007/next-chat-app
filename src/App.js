import React, { useState } from "react";
import "./App.css";
import TextInput from "./Components/Input";
import ConversationField from "./Components/ConversationField";
import moment from "moment";

function App() {
  const [textInput, setTextInput] = useState("");
  const [char, setChar] = useState(false);
  const [username, setUsername] = useState("");
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

  const sendMessage = (e) => {
    e.preventDefault();
    if (textInput !== "") {
      let copy = [...conversation];
      let newItem = {
        username: username,
        message: textInput,
        timestamp: moment().format("MMMM Do YYYY, h:mm:ss a"),
      };
      copy.push(newItem);
      setConversation(copy);

      setTextInput("");
      setUsername("");
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
    <div className="App">
      <TextInput
        setUsername={setUsername}
        username={username}
        char={char}
        textInput={textInput}
        sendMessage={sendMessage}
        setTextInput={setTextInput}
        handleInputText={handleInputText}
      />

      <ConversationField conversation={conversation} />
    </div>
  );
}

export default App;
