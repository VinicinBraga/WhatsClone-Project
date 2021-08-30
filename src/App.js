import React, { useState } from "react";
import "./App.css";

import ChatListItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";

import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

function App() {
  const [chatlist, setchatlist] = useState([
    {
      chatId: 1,
      title: "Fulana",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo7WfE6wFfdpeFph92LdEFJFnula0ecIObiQ&usqp=CAU",
    },
    {
      chatId: 2,
      title: "Beltrano",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-SUUqs3ByMgg4Rr1JDXWnCPGB67qfMdEtQFBq5RJXTahyk0y-wNkQzuukOh13F5X-byE&usqp=CAU",
    },
    {
      chatId: 3,
      title: "Ciclana",
      image:
        "https://markspiscinas.com.br/wp-content/uploads/2021/03/perfil-de-avatar-de-mulher-no-icone-redondo_24640-14042.jpg",
    },
  ]);
  const [activeChat, setactiveChat] = useState({});
  const [user, setUser] = useState({
    id: 2,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UccHxXotQA8rNbk-aZ344Ow9d4Cn0qE8ap3y-c7pio4msVjFAfUVU8xnSm-ORjIjRuA&usqp=CAU",
    name: "User Exemplo",
  });
  return (
    <div className="app-window">
      <div className="sidebar">
        <header>
          <img className="header--avatar" src={user.avatar} alt="" />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{ color: "#919191" }} />
            </div>
            <div className="header--btn">
              <ChatIcon style={{ color: "#919191" }} />
            </div>
            <div className="header--btn">
              <MoreVertIcon style={{ color: "#919191" }} />
            </div>
          </div>
        </header>
        <div className="search">
          <div className="search--input">
            <SearchIcon fontSize="small" style={{ color: "#919191" }} />
            <input
              type="search"
              placeholder="Procurar ou começar uma nova conversa"
            ></input>
          </div>
        </div>
        <div className="chatlist">
          {chatlist.map((item, key) => (
            <ChatListItem
              key={key}
              data={item}
              active={activeChat.chatId === chatlist[key].chatId}
              onClick={() => setactiveChat(chatlist[key])}
            />
          ))}
        </div>
      </div>
      <div className="contentarea">
        {activeChat.chatId !== undefined && <ChatWindow user={user} />}
        {activeChat.chatId === undefined && <ChatIntro />}
      </div>
    </div>
  );
}

export default App;
