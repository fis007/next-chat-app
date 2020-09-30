import React from "react";

export default function Input({
  textInput,
  sendMessage,
  char,
  handleInputText,
}) {
  return (
    <div>
      <form style={{ marginTop: "2%" }} onSubmit={(e) => sendMessage(e)}>
        <input
          style={{ width: "30%" }}
          placeholder="Write something"
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
