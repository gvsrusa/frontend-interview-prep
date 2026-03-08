import { useState, useCallback } from "react";
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);
  const toggle = useCallback(() => setValue((v) => !v), []);
  return [value, toggle];
}
export default function ToggleDemo() {
  const [isOn, toggle] = useToggle();
  const [isOpen, toggleOpen] = useToggle(true);
  return <div>
      <h2>useToggle Demo</h2>
      <p>Light: {isOn ? "ON" : "OFF"}</p>
      <button onClick={toggle}>Toggle Light</button>

      <p>Menu: {isOpen ? "Open" : "Closed"}</p>
      <button onClick={toggleOpen}>Toggle Menu</button>
    </div>;
}
export { useToggle };
