import React from "react";
import "./Player.css";
function Player(props) {
  const { player } = props;
  return (
    <div className="player-cotainer">
      <img src={player.img}></img>
      <div className="player-info">
        <h2>{player.name}</h2>
        <p>
          <span className="span">Age: </span> {player.age}
        </p>
        <p>Height: {player.height}</p>
        <p>Price: {player.price}</p>
      </div>
    </div>
  );
}

export default Player;
