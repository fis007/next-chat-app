import React from "react";

export default function ConversationField({ conversation }) {
  let randomNum = Math.floor(Math.random() * 285);
  console.log(randomNum);
  return conversation.map((data, index) => {
    return (
      <div key={index} style={{ border: "1px solid black" }}>
        <img src={`https://api.adorable.io/avatars/285/${data.username}`} />
        <h1>{data.username}</h1>
        <p>{data.message}</p>
        <h3>{data.timestamp}</h3>
      </div>
    );
  });
}

// moment().format('MMMM Do YYYY, h:mm:ss a')

// {
//     username: "Edwind",
//     message: "What did the ocean say to another ocean?",
//     timestamp: 1544532325758,
//   },
//   { username: "Liren", message: "sea you later?", timestamp: 1544532341078 },
//   {
//     username: "Edwind",
//     message: "Nothing. It just waved",
//     timestamp: 1544532347412,
//   },
//   {
//     username: "Josh",
//     message: "I'm leaving this chatroom",
//     timestamp: 1544532402998,
//   },
// ]);
