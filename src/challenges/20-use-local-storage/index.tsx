import { useState } from 'react'

export function useLocalStorage(key, initialValue) {
  // TODO: Initialize state from localStorage if available, else use initialValue
  const [storedValue] = useState(initialValue)

  // TODO: Create a setValue function that updates both state and localStorage
  const setValue = () => {}

  return [storedValue, setValue]
}

export default function LocalStorageDemo() {
  const [name, setName] = useLocalStorage('name', '')

  return (
    <div>
      <h2>useLocalStorage Demo</h2>
      {/* TODO: Wire up the input to read/write from localStorage */}
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Stored name: {name}</p>
    </div>
  )
}
