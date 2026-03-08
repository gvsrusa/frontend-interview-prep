import { useState } from 'react'

interface UseUndoRedoReturn<T> {
  state: T
  set: (newState: T) => void
  undo: () => void
  redo: () => void
  canUndo: boolean
  canRedo: boolean
}

export function useUndoRedo<T>(initialState: T): UseUndoRedoReturn<T> {
  const [state] = useState(initialState)

  // TODO: Maintain past and future stacks
  // TODO: Implement set - push current to past, clear future, set new state
  // TODO: Implement undo - pop from past, push current to future
  // TODO: Implement redo - pop from future, push current to past

  return {
    state,
    set: () => {},
    undo: () => {},
    redo: () => {},
    canUndo: false,
    canRedo: false,
  }
}

export default function UndoRedoDemo() {
  const { state, set, undo, redo, canUndo, canRedo } = useUndoRedo('')
  const [input, setInput] = useState('')

  const handleSubmit = () => {
    if (input.trim()) {
      set(input.trim())
      setInput('')
    }
  }

  return (
    <div>
      <h2>Undo/Redo Demo</h2>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text..."
      />
      <button onClick={handleSubmit}>Set</button>
      <button onClick={undo} disabled={!canUndo}>Undo</button>
      <button onClick={redo} disabled={!canRedo}>Redo</button>
      <p>Current: {state || '(empty)'}</p>
    </div>
  )
}
