import React from "react";
import "./ChatListItem.css";

export default function ChatListItem({ onClick, active, data }) {
  return (
    <div className={`chatListItem ${active ? "active" : ""}`} onClick={onClick}>
      <img className="chatListItem--avatar" src={data.image} alt="" />
      <div className="chatListItem--lines">
        <div className="chatListItem--line">
          <div className="chatlist--name">{data.title}</div>
          <div className="chatlist--date">19:00</div>
        </div>
        <div className="chatListItem--line">
          <div className="chatlist--lastMsg">
            <p>{data.lastMessage}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
