import { useTimer } from '@/hooks/useTimer'

interface TimerProps {
  initialMinutes?: number
}

export default function Timer({ initialMinutes = 30 }: TimerProps) {
  const { display, isRunning, isExpired, pct, start, pause, reset } = useTimer(initialMinutes)

  const color = isExpired
    ? 'text-hard'
    : pct < 0.25
      ? 'text-hard'
      : pct < 0.5
        ? 'text-medium'
        : 'text-text'

  return (
    <div className="flex items-center gap-3">
      <span className={`font-mono text-2xl font-bold ${color}`}>{display}</span>
      <div className="flex gap-1">
        {!isRunning ? (
          <button
            onClick={start}
            className="rounded bg-primary px-3 py-1 text-sm font-medium text-white hover:bg-primary-dark"
          >
            {isExpired ? 'Expired' : 'Start'}
          </button>
        ) : (
          <button
            onClick={pause}
            className="rounded bg-surface-lighter px-3 py-1 text-sm font-medium text-text hover:bg-border"
          >
            Pause
          </button>
        )}
        <button
          onClick={() => reset()}
          className="rounded bg-surface-lighter px-3 py-1 text-sm font-medium text-text-muted hover:bg-border"
        >
          Reset
        </button>
      </div>
    </div>
  )
}
