import React, { useState } from "react";
import "./Game.css";
import Square from "./Square";
function Game() {
  const [Board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);

  const choosesquare = () => {};

  return (
    <div className="App">
      <div className="Board">
        <div className="row">
          <Square
            val={Board[0]}
            choosesquare={(choosesquare) => {
              alert(0);
            }}
          />

          <Square
            val={Board[1]}
            choosesquare={() => {
              alert(1);
            }}
          />

          <Square
            val={Board[2]}
            choosesquare={() => {
              alert(2);
            }}
          />
        </div>
        <div className="row"></div>
        <div className="row"></div>
      </div>
    </div>
  );
}

export default Game;
