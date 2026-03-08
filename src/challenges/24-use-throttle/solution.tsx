import { useState, useRef, useCallback, useEffect } from 'react'

export function useThrottle(callback, delay) {
  const lastRun = useRef(0)
  const timerRef = useRef(null)
  const callbackRef = useRef(callback)

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [])

  return useCallback(
    (...args) => {
      const now = Date.now()
      const remaining = delay - (now - lastRun.current)

      if (remaining <= 0) {
        if (timerRef.current) {
          clearTimeout(timerRef.current)
          timerRef.current = null
        }
        lastRun.current = now
        callbackRef.current(...args)
      } else if (!timerRef.current) {
        timerRef.current = setTimeout(() => {
          lastRun.current = Date.now()
          timerRef.current = null
          callbackRef.current(...args)
        }, remaining)
      }
    },
    [delay]
  )
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
