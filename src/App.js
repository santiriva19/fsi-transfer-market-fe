import { useEffect, useState } from "react";
import Task from "./components/Task/Task";

import "./App.css";
import Player from "./components/Player/Player";
function App() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    fetch("https://fsi-transfer-market-be.onrender.com/players", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        setPlayers(res.players);
      });
  }, []);
  return (
    <>
      <h1 style={{ width: "100%", textAlign: "center" }}>Players</h1>
      <div className="container">
        {players.map((player) => (
          <Player player={player} />
        ))}
      </div>
    </>
  );
}

export default App;
