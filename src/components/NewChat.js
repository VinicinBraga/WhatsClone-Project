import React, { useState } from "react";
import "./NewChat.css";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export default function NewChat({ chatlist, user, show, setShow }) {
  const [list, setList] = useState([
    {
      id: 123,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UccHxXotQA8rNbk-aZ344Ow9d4Cn0qE8ap3y-c7pio4msVjFAfUVU8xnSm-ORjIjRuA&usqp=CAU",
      name: "Fulano(newChat)",
    },
    {
      id: 123,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UccHxXotQA8rNbk-aZ344Ow9d4Cn0qE8ap3y-c7pio4msVjFAfUVU8xnSm-ORjIjRuA&usqp=CAU",
      name: "Fulano(newChat)",
    },
    {
      id: 123,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UccHxXotQA8rNbk-aZ344Ow9d4Cn0qE8ap3y-c7pio4msVjFAfUVU8xnSm-ORjIjRuA&usqp=CAU",
      name: "Fulano(newChat)",
    },
    {
      id: 123,
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UccHxXotQA8rNbk-aZ344Ow9d4Cn0qE8ap3y-c7pio4msVjFAfUVU8xnSm-ORjIjRuA&usqp=CAU",
      name: "Fulano(newChat)",
    },
  ]);

  const handleClose = () => {
    setShow(false);
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
          <div className="newChat--item" key={key}>
            <img className="newChat--itemavatar" src={item.avatar} alt="" />
            <div className="newChat--itemname">{item.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
