import { useState, useEffect } from "react";
function useKeyPress(targetKey) {
  const [isPressed, setIsPressed] = useState(false);
  useEffect(() => {
    const handleDown = (e) => {
      if (e.key === targetKey) setIsPressed(true);
    };
    const handleUp = (e) => {
      if (e.key === targetKey) setIsPressed(false);
    };
    window.addEventListener("keydown", handleDown);
    window.addEventListener("keyup", handleUp);
    return () => {
      window.removeEventListener("keydown", handleDown);
      window.removeEventListener("keyup", handleUp);
    };
  }, [targetKey]);
  return isPressed;
}
export default function KeyPressDemo() {
  const isEnterPressed = useKeyPress("Enter");
  const isEscapePressed = useKeyPress("Escape");
  return <div>
      <h2>useKeyPress Demo</h2>
      <p>Press Enter or Escape</p>
      <p>Enter: {isEnterPressed ? "Pressed" : "Released"}</p>
      <p>Escape: {isEscapePressed ? "Pressed" : "Released"}</p>
    </div>;
}
export { useKeyPress };
