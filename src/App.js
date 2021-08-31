import React, { useState, useEffect } from "react";
import "./App.css";

import ChatListItem from "./components/ChatListItem";
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";
import NewChat from "./components/NewChat";
import Login from "./components/Login";
import Api from "./Api";

import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

function App() {
  const [chatlist, setchatlist] = useState([]);
  const [activeChat, setactiveChat] = useState({});
  const [user, setUser] = useState({
    id: "Bc4nEL3v5aYH0e2lj7f2",
    name: "Vini",
    avatar:
      "https://scontent.fplu9-1.fna.fbcdn.net/v/l/t1.6435-1/cp0/p32x32/44948695_10216607519956137_442810187619762176_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=dbb9e7&_nc_eui2=AeHadoA9xBOZuhqaYeWAovbq3XIt9oAlJZjdci32gCUlmBi_KHCRlTSFANjZXk1uy6g&_nc_ohc=cjpTIBcWWqAAX8PpgO0&_nc_ht=scontent.fplu9-1.fna&oh=b2f80b15c285db9cc98b9d883567e3ba&oe=6153D65F",
  });
  const [showNewCHat, setShowNewCHat] = useState(false);

  useEffect(() => {
    if (user !== null) {
      let unsub = Api.onChatList(user.id, setchatlist);
      return unsub;
    }
  }, [user]);

  const handleNewChat = () => {
    setShowNewCHat(true);
  };

  const handleLoginData = async (u) => {
    let newUser = {
      id: u.uid,
      name: u.displayName,
      avatar: u.photoURL,
    };
    await Api.addUser(newUser);
    setUser(newUser);
  };

  if (user === null) {
    return <Login onReceive={handleLoginData} />;
  }

  return (
    <div className="app-window">
      <div className="sidebar">
        <NewChat
          chatlist={chatlist}
          user={user}
          show={showNewCHat}
          setShow={setShowNewCHat}
        />
        <header>
          <img className="header--avatar" src={user.avatar} alt="" />
          <div className="header--buttons">
            <div className="header--btn">
              <DonutLargeIcon style={{ color: "#919191" }} />
            </div>
            <div onClick={handleNewChat} className="header--btn">
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
        x
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
