import { useState } from 'react'

export function useDebounce<T>(value: T, delay: number): T {
  // TODO: Create state for the debounced value
  // TODO: Set up a useEffect with setTimeout to update after the delay
  // TODO: Clear the timeout on cleanup or when value/delay changes
  return value
}

export default function DebounceDemo() {
  const [text, setText] = useState('')
  const debouncedText = useDebounce(text, 500)

  return (
    <div>
      <h2>useDebounce Demo</h2>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
      <p>Input: {text}</p>
      <p>Debounced: {debouncedText}</p>
    </div>
  )
}
