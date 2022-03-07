import React from "react";
import "./Game.css";

function Square(val, choosesquare) {
  return (
    <div className="square" onClick={choosesquare}>
      {val}
    </div>
  );
}

export default Square;
