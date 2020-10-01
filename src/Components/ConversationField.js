import React from "react";

export default function ConversationField({ conversation, username }) {
  return conversation.map((data, index) => {
    return (
      <div style={{ display: "flex", margin: "10% 10%" }} key={index}>
        <img
          style={{
            height: "10%",
            width: "10%",
            borderRadius: "50%",
            border: "1px solid gold",
          }}
          src={`https://api.adorable.io/avatars/285/${data.username}`}
        />

        <div
          style={{
            border: "1px solid black",
            padding: "5%",
            boxShadow: "5px 5px",
          }}
        >
          <p>{data.message}</p>
          <p style={{ color: "gray" }}>
            {data.username} - {data.timestamp}
          </p>
        </div>
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
