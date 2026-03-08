import { useState } from 'react'

export function useThrottle(callback, delay) {
  // TODO: Track the last execution time with a ref
  // TODO: Use a timer ref for the trailing call
  // TODO: Return a throttled version of the callback that fires at most once per delay

  return callback
}

export default function ThrottleDemo() {
  const [count, setCount] = useState(0)
  const [throttledCount, setThrottledCount] = useState(0)

  const handleClick = useThrottle(() => {
    setThrottledCount((c) => c + 1)
  }, 1000)

  return (
    <div>
      <h2>useThrottle Demo</h2>
      <button onClick={() => { setCount((c) => c + 1); handleClick() }}>
        Click Fast!
      </button>
      <p>Total clicks: {count}</p>
      <p>Throttled clicks: {throttledCount}</p>
    </div>
  )
}
