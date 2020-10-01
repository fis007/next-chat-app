import React from "react";

export default function OnlineUsers({ users }) {
  return (
    <div
      style={{
        borderRight: "1px solid black",
        width: "30%",
      }}
    >
      <h1 style={{ color: "green" }}>Online Users</h1>
      {users.map((user, index) => (
        <div
          style={{
            textAlign: "left",
            padding: "0%",
            padding: "0",
          }}
          key={index}
        >
          <img
            style={{ width: "12%" }}
            src="https://media.giphy.com/media/g4G27DgZwqaK8qykXS/giphy.gif"
          />
          <span style={{ marginBottom: "5%" }}>{user.username}</span>
        </div>
      ))}
    </div>
  );
}
