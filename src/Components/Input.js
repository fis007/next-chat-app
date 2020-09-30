import React from "react";

export default function Input({
  textInput,
  setTextInput,
  sendMessage,
  char,
  handleInputText,
  setUsername,
  username,
}) {
  return (
    <div>
      <form onSubmit={(e) => sendMessage(e)}>
        <label>Username</label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
        />
        <label>Message</label>
        <input
          value={textInput}
          onChange={(e) => handleInputText(e)}
          type="text"
        />
        {char ? <div>More than 500 Characters!</div> : null}
        <button disabled={char}>Submit</button>
      </form>
    </div>
  );
}
