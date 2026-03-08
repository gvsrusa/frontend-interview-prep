import { useState, useRef, useCallback, useEffect } from 'react'

export function useTimer(initialMinutes: number = 30) {
  const [secondsLeft, setSecondsLeft] = useState(initialMinutes * 60)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const start = useCallback(() => setIsRunning(true), [])
  const pause = useCallback(() => setIsRunning(false), [])

  const reset = useCallback((minutes?: number) => {
    setIsRunning(false)
    setSecondsLeft((minutes ?? initialMinutes) * 60)
  }, [initialMinutes])

  useEffect(() => {
    if (isRunning && secondsLeft > 0) {
      intervalRef.current = setInterval(() => {
        setSecondsLeft(prev => {
          if (prev <= 1) {
            setIsRunning(false)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [isRunning, secondsLeft])

  const minutes = Math.floor(secondsLeft / 60)
  const seconds = secondsLeft % 60
  const display = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  const isExpired = secondsLeft === 0
  const pct = initialMinutes > 0 ? secondsLeft / (initialMinutes * 60) : 0

  return { secondsLeft, isRunning, isExpired, display, pct, start, pause, reset }
}
