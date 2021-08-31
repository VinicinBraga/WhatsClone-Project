import React, { useState, useEffect } from "react";
import "./NewChat.css";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Api from "../Api";

export default function NewChat({ chatlist, user, show, setShow }) {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getlist = async () => {
      if (user !== null) {
        let results = await Api.getContactList(user.id);
        setList(results);
      }
    };
    getlist();
  }, [user]);

  const handleClose = () => {
    setShow(false);
  };

  const addNewChat = async (user2) => {
    await Api.addNewChat(user, user2);

    handleClose();
  };
  return (
    <div className="newChat" style={{ left: show ? 0 : -415 }}>
      <div className="newChat--head">
        <div onClick={handleClose} className="newChat--backbutton">
          <ArrowBackIcon style={{ color: "#fff" }} />
        </div>
        <div className="newChat--headtitle">Nova Conversa</div>
      </div>
      <div className="newChat--list">
        {list.map((item, key) => (
          <div
            onClick={() => addNewChat(item)}
            className="newChat--item"
            key={key}
          >
            <img className="newChat--itemavatar" src={item.avatar} alt="" />
            <div className="newChat--itemname">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
