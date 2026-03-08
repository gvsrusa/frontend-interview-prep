import { useState } from "react";
function useDebounce(value, delay) {
  return value;
}
export default function DebounceDemo() {
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text, 500);
  return <div>
      <h2>useDebounce Demo</h2>
      <input
    value={text}
    onChange={(e) => setText(e.target.value)}
    placeholder="Type something..."
  />
      <p>Input: {text}</p>
      <p>Debounced: {debouncedText}</p>
    </div>;
}
export { useDebounce };
