import { useState, useEffect } from 'react'

export default function DigitalClock() {
  const [time, setTime] = useState(new Date())
  const [is24h, setIs24h] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = (date) => {
    const h = date.getHours()
    const m = date.getMinutes()
    const s = date.getSeconds()
    const pad = (n) => String(n).padStart(2, '0')

    if (is24h) {
      return `${pad(h)}:${pad(m)}:${pad(s)}`
    }

    const period = h >= 12 ? 'PM' : 'AM'
    const h12 = h % 12 || 12
    return `${pad(h12)}:${pad(m)}:${pad(s)} ${period}`
  }

  return (
    <div>
      <time aria-live="polite" aria-label="current time">
        {formatTime(time)}
      </time>
      <br />
      <button onClick={() => setIs24h((v) => !v)}>
        Switch to {is24h ? '12h' : '24h'}
      </button>
    </div>
  )
}
