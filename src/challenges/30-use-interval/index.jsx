import { useState } from 'react'

export function useInterval(callback, delay) {
  // TODO: Store the callback in a ref to always use the latest version
  // TODO: Set up the interval with setInterval when delay is not null
  // TODO: Clear the interval when delay changes or on unmount
  // TODO: Support pausing by passing null as delay
}

export default function IntervalDemo() {
  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(true)

  useInterval(() => setCount((c) => c + 1), isRunning ? 1000 : null)

  return (
    <div>
      <h2>useInterval Demo</h2>
      <p>Count: {count}</p>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? 'Pause' : 'Resume'}
      </button>
    </div>
  )
}
