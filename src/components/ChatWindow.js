import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import "./ChatWindow.css";

import SearchIcon from "@material-ui/icons/Search";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CloseIcon from "@material-ui/icons/Close";
import SendIcon from "@material-ui/icons/Send";
import MicIcon from "@material-ui/icons/Mic";

export default function ChatWindow() {
  const [emojiOpen, setEmojiOpen] = useState(false);

  const handleEmojiClick = () => {};

  const handleOpenEmoji = () => {
    setEmojiOpen(true);
  };
  const handleCloseEmoji = () => {
    setEmojiOpen(false);
  };
  return (
    <div className="chatWindow">
      <div className="chatWindow--header">
        <div className="chatWindow--headerinfo">
          <img
            className="chatWindow--avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UccHxXotQA8rNbk-aZ344Ow9d4Cn0qE8ap3y-c7pio4msVjFAfUVU8xnSm-ORjIjRuA&usqp=CAU"
            alt=""
          />
          <div className="chatWindow--name">Vini Braga</div>
        </div>

        <div className="chatWindow--headerbuttons">
          <div className="chatWindow--btn">
            <SearchIcon style={{ color: "#919191" }} />
            <AttachFileIcon style={{ color: "#919191" }} />
            <MoreVertIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>
      <div className="chatWindow--body"></div>
      <div
        className="chatWindow--emojiarea"
        style={{ height: emojiOpen ? "200px" : "0px" }}
      >
        <EmojiPicker
          onEmojiClick={handleEmojiClick}
          disableSearchBar
          disableSkinTonePicker
        />
      </div>
      <div className="chatWindow--footer">
        <div className="chatWindow--pre">
          <div className="chatWindow--btn" onClick={handleCloseEmoji}>
            <CloseIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow--btn" onClick={handleOpenEmoji}>
            <InsertEmoticonIcon style={{ color: "#919191" }} />
          </div>
        </div>
        <div className="chatWindow--inputarea">
          <input
            className="chatWindow--input"
            type="text"
            placeholder="Digite uma mensagem"
          />
        </div>
        <div className="chatWindow--pos">
          <div className="chatWindow--btn">
            <SendIcon style={{ color: "#919191" }} />
          </div>
          <div className="chatWindow--btn">
            <MicIcon style={{ color: "#919191" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
