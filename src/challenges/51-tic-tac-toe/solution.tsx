import { useState } from 'react';

type Player = 'X' | 'O';
type Cell = Player | null;
type Board = Cell[];

const WINNING_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function calculateWinner(board: Board): Player | null {
  for (const [a, b, c] of WINNING_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  return null;
}

export default function TicTacToe() {
  const [history, setHistory] = useState<Board[]>([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const board = history[stepNumber];
  const winner = calculateWinner(board);
  const isDraw = !winner && board.every((cell) => cell !== null);

  const handleClick = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'X' : 'O';

    const newHistory = history.slice(0, stepNumber + 1);
    newHistory.push(newBoard);

    setHistory(newHistory);
    setStepNumber(newHistory.length - 1);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (moveIndex: number) => {
    setStepNumber(moveIndex);
    setXIsNext(moveIndex % 2 === 0);
  };

  const reset = () => {
    setHistory([Array(9).fill(null)]);
    setStepNumber(0);
    setXIsNext(true);
  };

  let status: string;
  if (winner) status = `Winner: ${winner}`;
  else if (isDraw) status = 'Draw';
  else status = `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div>
      <h2>Tic Tac Toe</h2>
      <p>{status}</p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 60px)', gap: 4 }}>
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => handleClick(i)}
            style={{ width: 60, height: 60, fontSize: 24, cursor: 'pointer' }}
          >
            {cell}
          </button>
        ))}
      </div>
      <button onClick={reset} style={{ marginTop: 12 }}>Reset</button>
      <div style={{ marginTop: 16 }}>
        <h3>History</h3>
        {history.map((_, i) => (
          <button
            key={i}
            onClick={() => jumpTo(i)}
            style={{
              display: 'block',
              marginBottom: 2,
              fontWeight: i === stepNumber ? 'bold' : 'normal',
            }}
          >
            {i === 0 ? 'Game start' : `Move #${i}`}
          </button>
        ))}
      </div>
    </div>
  );
}
