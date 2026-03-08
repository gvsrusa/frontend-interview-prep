import { useState } from "react";
function useUndoRedo(initialState) {
  const [state] = useState(initialState);
  return {
    state,
    set: () => {
    },
    undo: () => {
    },
    redo: () => {
    },
    canUndo: false,
    canRedo: false
  };
}
export default function UndoRedoDemo() {
  const { state, set, undo, redo, canUndo, canRedo } = useUndoRedo("");
  const [input, setInput] = useState("");
  const handleSubmit = () => {
    if (input.trim()) {
      set(input.trim());
      setInput("");
    }
  };
  return <div>
      <h2>Undo/Redo Demo</h2>
      <input
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Enter text..."
  />
      <button onClick={handleSubmit}>Set</button>
      <button onClick={undo} disabled={!canUndo}>Undo</button>
      <button onClick={redo} disabled={!canRedo}>Redo</button>
      <p>Current: {state || "(empty)"}</p>
    </div>;
}
export { useUndoRedo };
