import { useState } from "react";
function useToggle(initialValue = false) {
  const [value] = useState(initialValue);
  const toggle = () => {
  };
  return [value, toggle];
}
export default function ToggleDemo() {
  const [isOn, toggle] = useToggle();
  return <div>
      <h2>useToggle Demo</h2>
      {
    /* TODO: Display the toggle state and wire up the button */
  }
      <p>State: {isOn ? "ON" : "OFF"}</p>
      <button onClick={toggle}>Toggle</button>
    </div>;
}
export { useToggle };
