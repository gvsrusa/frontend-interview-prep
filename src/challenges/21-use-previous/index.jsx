import { useState } from "react";
function usePrevious(value) {
  return void 0;
}
export default function PreviousDemo() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  return <div>
      <h2>usePrevious Demo</h2>
      <p>Current: {count}</p>
      <p>Previous: {prevCount ?? "N/A"}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>;
}
export { usePrevious };
