import "../styles.css";
import { useState } from "react";
import { Square } from "./Square";

const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const clickHandler = (i) => {
    if (calculateWinner(square) || square[i]) {
      return;
    }
    const nextSquare = square.slice();
    xIsNext ? (nextSquare[i] = "X") : (nextSquare[i] = "O");
    setSquare(nextSquare);
    setXIsNext(!xIsNext);
  };

  const calculateWinner = (square) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i in lines) {
      const [a, b, c] = lines[i];
      if (square[a] && square[a] === square[b] && square[a] === square[c]) {
        return square[a];
      }
    }
    return null;
  };

  const winner = calculateWinner(square);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next turn: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={square[0]} onSquareClick={() => clickHandler(0)} />
        <Square value={square[1]} onSquareClick={() => clickHandler(1)} />
        <Square value={square[2]} onSquareClick={() => clickHandler(2)} />
      </div>
      <div className="board-row">
        <Square value={square[3]} onSquareClick={() => clickHandler(3)} />
        <Square value={square[4]} onSquareClick={() => clickHandler(4)} />
        <Square value={square[5]} onSquareClick={() => clickHandler(5)} />
      </div>
      <div className="board-row">
        <Square value={square[6]} onSquareClick={() => clickHandler(6)} />
        <Square value={square[7]} onSquareClick={() => clickHandler(7)} />
        <Square value={square[8]} onSquareClick={() => clickHandler(8)} />
      </div>
    </>
  );
};

export { Board };
