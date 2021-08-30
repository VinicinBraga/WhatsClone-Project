import React from "react";
import "./MenssageItem.css";

export default function MenssageItem({ data, user }) {
  return (
    <div
      className="messageLine"
      style={{
        justifyContent: user.id === data.author ? "flex-end" : "flex-start",
      }}
    >
      <div
        className="messageItem"
        style={{
          backgroundColor: user.id === data.author ? "#dcf8c6" : "#fff",
        }}
      >
        <div className="messageText">{data.body}</div>
        <div className="messageDate">14:00</div>
      </div>
    </div>
  );
}
