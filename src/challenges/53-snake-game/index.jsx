import { useState } from "react";
const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SPEED = 150;
function randomFood(snake) {
  let food;
  do {
    food = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };
  } while (snake.some((s) => s.x === food.x && s.y === food.y));
  return food;
}
export default function SnakeGame() {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState({ x: 15, y: 10 });
  const [direction, setDirection] = useState("RIGHT");
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [running, setRunning] = useState(false);
  return <div>
      <h2>Snake Game</h2>
      <p>Score: {score}</p>
      {gameOver && <p style={{ color: "red", fontWeight: "bold" }}>Game Over!</p>}
      <button onClick={() => setRunning(true)}>
        {gameOver ? "Restart" : running ? "Running..." : "Start"}
      </button>
      <div
    style={{
      display: "grid",
      gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
      border: "2px solid #333",
      marginTop: 12,
      width: GRID_SIZE * CELL_SIZE
    }}
  >
        {Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, i) => {
    const x = i % GRID_SIZE;
    const y = Math.floor(i / GRID_SIZE);
    const isSnake = snake.some((s) => s.x === x && s.y === y);
    const isFood = food.x === x && food.y === y;
    return <div
      key={i}
      style={{
        width: CELL_SIZE,
        height: CELL_SIZE,
        background: isSnake ? "#16a34a" : isFood ? "#ef4444" : "#f5f5f5",
        border: "1px solid #e5e5e5"
      }}
    />;
  })}
      </div>
    </div>;
}
