import { useState } from 'react'

export function usePrevious<T>(value: T): T | undefined {
  // TODO: Use a ref to store the previous value
  // TODO: Update the ref in a useEffect after each render
  return undefined
}

export default function PreviousDemo() {
  const [count, setCount] = useState(0)
  const prevCount = usePrevious(count)

  return (
    <div>
      <h2>usePrevious Demo</h2>
      <p>Current: {count}</p>
      <p>Previous: {prevCount ?? 'N/A'}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  )
}
