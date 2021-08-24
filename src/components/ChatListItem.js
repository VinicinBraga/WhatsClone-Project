import React, { Component } from "react";
import "./ChatListItem.css";

export default class ChatListItem extends Component {
  render() {
    return (
      <div className="chatListItem">
        <img
          className="chatListItem--avatar"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7WfE6wFfdpeFph92LdEFJFnula0ecIObiQ&usqp=CAU"
          alt=""
        />
        <div className="chatListItem--lines">
          <div className="chatListItem--line">
            <div className="chatlist--name">Vini Braga</div>
            <div className="chatlist--date">19:00</div>
          </div>
          <div className="chatListItem--line">
            <div className="chatlist--lastMsg">
              <p>fala zeze</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
