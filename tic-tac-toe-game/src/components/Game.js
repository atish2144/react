import React from "react";
import { useState, useRef } from "react";
import "./Game.css";
let array = [];
function Game() {
  const [item, setitem] = useState("");
  const [count, setcount] = useState(0);
  //   let count = 0;

  const changeHandle = () => {
    if (count % 2 === 0) {
      array.push("x");
      setitem(...array);
      //count++;
      setcount((prev) => prev + 1);
      console.log(array);
      console.log("count", count);
    } else {
      array.push("0");
      setitem(...array);
      //   count++;
      setcount((prev) => prev + 1);

      console.log(array);
      console.log("count", count);
    }
    if (count === 8) {
      alert();
    }
  };

  return (
    <div>
      <div className="btn1">
        <button className="btn2" onClick={changeHandle}></button>
        <button className="btn2" onClick={changeHandle}>
          {array[1]}
        </button>
        <button className="btn2" onClick={changeHandle}>
          {array[2]}
        </button>
      </div>
      <div>
        <button className="btn2" onClick={changeHandle}>
          {array[3]}
        </button>
        <button className="btn2" onClick={changeHandle}>
          {array[4]}
        </button>
        <button className="btn2" onClick={changeHandle}>
          {array[5]}
        </button>
      </div>
      <div>
        <button className="btn2" onClick={changeHandle}>
          {array[6]}
        </button>
        <button className="btn2" onClick={changeHandle}>
          {array[7]}
        </button>
        <button className="btn2" onClick={changeHandle}>
          {array[8]}
        </button>
      </div>
    </div>
  );
}

export default Game;
