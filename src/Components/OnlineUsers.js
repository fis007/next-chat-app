import React from "react";

export default function OnlineUsers({ users }) {
  return (
    <div>
      <h1 style={{ color: "green" }}>Online Users</h1>
      {users.map((user, index) => (
        <div style={{ marginBottom: "5%" }} key={index}>
          {user.username}
        </div>
      ))}
    </div>
  );
}
