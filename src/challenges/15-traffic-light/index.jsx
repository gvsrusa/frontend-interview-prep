import { useState, useEffect } from "react";
const defaultConfig = { red: 4e3, yellow: 500, green: 3e3 };
const transitions = {
  red: "green",
  green: "yellow",
  yellow: "red"
};
export default function TrafficLight({ config = defaultConfig }) {
  const [active, setActive] = useState("red");
  useEffect(() => {
    const timer = setTimeout(() => {
      setActive((prev) => transitions[prev]);
    }, config[active]);
    return () => clearTimeout(timer);
  }, [active, config]);
  const lights = ["red", "yellow", "green"];
  return <div
    aria-label="traffic light"
    style={{
      display: "inline-flex",
      flexDirection: "column",
      gap: "8px",
      padding: "16px",
      backgroundColor: "#1f2937",
      borderRadius: "12px"
    }}
  >
      {lights.map((color) => <div
    key={color}
    data-testid={`light-${color}`}
    aria-label={color === active ? `${color} light active` : `${color} light`}
    style={{
      width: "60px",
      height: "60px",
      borderRadius: "50%",
      backgroundColor: color === active ? color : "#374151",
      opacity: color === active ? 1 : 0.3,
      transition: "all 0.3s"
    }}
  />)}
    </div>;
}
