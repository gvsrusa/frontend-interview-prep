import { useState, useEffect, useRef, useCallback } from "react";
const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SPEED = 150;
const OPPOSITES = {
  UP: "DOWN",
  DOWN: "UP",
  LEFT: "RIGHT",
  RIGHT: "LEFT"
};
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
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [running, setRunning] = useState(false);
  const directionRef = useRef("RIGHT");
  useEffect(() => {
    const handleKey = (e) => {
      const keyMap = {
        ArrowUp: "UP",
        ArrowDown: "DOWN",
        ArrowLeft: "LEFT",
        ArrowRight: "RIGHT"
      };
      const newDir = keyMap[e.key];
      if (newDir && newDir !== OPPOSITES[directionRef.current]) {
        directionRef.current = newDir;
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);
  useEffect(() => {
    if (!running || gameOver) return;
    const interval = setInterval(() => {
      setSnake((prev) => {
        const head = { ...prev[0] };
        switch (directionRef.current) {
          case "UP":
            head.y -= 1;
            break;
          case "DOWN":
            head.y += 1;
            break;
          case "LEFT":
            head.x -= 1;
            break;
          case "RIGHT":
            head.x += 1;
            break;
        }
        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE || prev.some((s) => s.x === head.x && s.y === head.y)) {
          setGameOver(true);
          setRunning(false);
          return prev;
        }
        const newSnake = [head, ...prev];
        setFood((currentFood) => {
          if (head.x === currentFood.x && head.y === currentFood.y) {
            setScore((s) => s + 1);
            const nextFood = randomFood(newSnake);
            return nextFood;
          }
          newSnake.pop();
          return currentFood;
        });
        return newSnake;
      });
    }, INITIAL_SPEED);
    return () => clearInterval(interval);
  }, [running, gameOver]);
  const startGame = useCallback(() => {
    setSnake([{ x: 10, y: 10 }]);
    setFood({ x: 15, y: 10 });
    directionRef.current = "RIGHT";
    setScore(0);
    setGameOver(false);
    setRunning(true);
  }, []);
  return <div>
      <h2>Snake Game</h2>
      <p>Score: {score}</p>
      {gameOver && <p style={{ color: "red", fontWeight: "bold" }}>Game Over!</p>}
      <button onClick={startGame}>
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
