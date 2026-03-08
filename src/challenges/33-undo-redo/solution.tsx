import { useState, useCallback } from 'react'

interface UseUndoRedoReturn<T> {
  state: T
  set: (newState: T) => void
  undo: () => void
  redo: () => void
  canUndo: boolean
  canRedo: boolean
}

export function useUndoRedo<T>(initialState: T): UseUndoRedoReturn<T> {
  const [state, setState] = useState(initialState)
  const [past, setPast] = useState<T[]>([])
  const [future, setFuture] = useState<T[]>([])

  const set = useCallback((newState: T) => {
    setState((current) => {
      setPast((p) => [...p, current])
      setFuture([])
      return newState
    })
  }, [])

  const undo = useCallback(() => {
    setPast((p) => {
      if (p.length === 0) return p
      const previous = p[p.length - 1]
      const newPast = p.slice(0, -1)
      setState((current) => {
        setFuture((f) => [...f, current])
        return previous
      })
      return newPast
    })
  }, [])

  const redo = useCallback(() => {
    setFuture((f) => {
      if (f.length === 0) return f
      const next = f[f.length - 1]
      const newFuture = f.slice(0, -1)
      setState((current) => {
        setPast((p) => [...p, current])
        return next
      })
      return newFuture
    })
  }, [])

  return {
    state,
    set,
    undo,
    redo,
    canUndo: past.length > 0,
    canRedo: future.length > 0,
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
