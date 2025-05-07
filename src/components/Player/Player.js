import React from "react";
import "./Player.css";
import { priceFormat } from "../../utils/price-format";
function Player(props) {
  const { player } = props;
  return (
    <div className="player-cotainer">
      <img src={player.Imagen}></img>
      <div className="player-info">
        <h2>{player.Nombre}</h2>
        <p>Price: {priceFormat(player["Precio (€)"])}</p>
      </div>
    </div>
  );
}

export default Player;
