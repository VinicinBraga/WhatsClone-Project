import React, { Component } from "react";
import "./ChatIntro.css";
import whatsappWifi from "./images/whats.webp";

export default class ChatIntro extends Component {
  render() {
    return (
      <div className="chatIntro">
        <img src={whatsappWifi} alt="" />
        <h1>Mantenha seu celular conectado</h1>
        <h2>
          O whatsApp conecta ao seu telefone para sincronizar suas mensagens.
          <br />
          Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-fi.
        </h2>
      </div>
    );
  }
}
