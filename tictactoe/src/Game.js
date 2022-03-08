import React, { useState } from "react";
import "./Game.css";

function Game() {
  const [Player, SetPlayer] = useState("X");
  const [cells, setcells] = useState(Array(9).fill(""));
  const [winner, setwinner] = useState();

  // let a = cells;
  const checkWinner = (squares) => {
    let combos = {
      accross: [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
      ],

      up: [
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
      ],

      down: [
        [2, 4, 6],
        [0, 4, 8],
      ],
    };

    for (let combo in combos) {
      combos[combo].forEach((pattern) => {
        if (
          squares[pattern[0]] === "" ||
          squares[pattern[1]] === "" ||
          squares[pattern[2]] === ""
        ) {
          //
        } else if (
          squares[pattern[0]] === squares[pattern[1]] &&
          squares[pattern[1]] === squares[pattern[2]]
        ) {
          setwinner(squares[pattern[0]]);
          console.log("hii");
          console.log(squares);
        } else if (
          squares[0] !== "" &&
          squares[1] !== "" &&
          squares[2] !== "" &&
          squares[3] !== "" &&
          squares[4] !== "" &&
          squares[5] !== "" &&
          squares[6] !== "" &&
          squares[7] !== "" &&
          squares[8] !== ""
        ) {
          setwinner(" Draw! No one  ");
        }
        // else if (
        //   ((squares[pattern[0]] === "" ||
        //     squares[pattern[1]] === "" ||
        //     squares[pattern[2]] === "") &&
        //     squares[pattern[0]] === squares[pattern[1]] &&
        //     squares[pattern[1]] === squares[pattern[2]]) ||
        //   squares[pattern[1]] === squares[pattern[2]]
        // ) {
        //   setwinner(" Its a Draw !No one ");
        // }
      });
    }
  };

  const handleClick = (num) => {
    if (cells[num] !== "") {
      alert("already clicked this staye try in another state");
      return;
    }
    let squares = [...cells];

    if (Player === "X") {
      squares[num] = "X";
      SetPlayer("o");
    } else {
      squares[num] = "o";
      SetPlayer("X");
    }
    checkWinner(squares);
    setcells(squares);
    console.log(squares);
  };

  const restart = () => {
    setwinner(null);
    setcells(Array(9).fill(""));
  };

  const Cell = ({ num }) => {
    return <td onClick={() => handleClick(num)}>{cells[num]}</td>;
  };

  return (
    <div>
      <div className="title">Tic Tac Toe</div>
      <br />
      <br />

      <div className="container">
        <table>
          Player - {Player}
          <tbody>
            <tr>
              <Cell num={0} />
              <Cell num={1} />
              <Cell num={2} />
            </tr>

            <tr>
              <Cell num={3} />
              <Cell num={4} />
              <Cell num={5} />
            </tr>

            <tr>
              <Cell num={6} />
              <Cell num={7} />
              <Cell num={8} />
            </tr>
          </tbody>
        </table>
        <br></br>
        {winner && (
          <>
            <p className="p1">{winner} is the winner</p>
            <button className="btn1" onClick={() => restart()}>
              Play Again
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default Game;
