import { useState, useEffect } from 'react'

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timer)
  }, [value, delay])

  return debouncedValue
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
