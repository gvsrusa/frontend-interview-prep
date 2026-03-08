import { useState, Suspense, lazy, type ComponentType } from 'react'
import ErrorBoundary from './ErrorBoundary'

interface SolutionRevealProps {
  loader?: () => Promise<{ default: ComponentType }>
  isReact?: boolean
  forceRevealed?: boolean
}

export default function SolutionReveal({ loader, isReact = true, forceRevealed = false }: SolutionRevealProps) {
  const [revealed, setRevealed] = useState(forceRevealed)
  const [confirmed, setConfirmed] = useState(forceRevealed)

  if (!loader) {
    return <p className="text-text-muted text-sm italic">No solution available for this challenge.</p>
  }

  if (!revealed) {
    return (
      <button
        onClick={() => setRevealed(true)}
        className="rounded bg-hard/20 px-4 py-2 text-sm font-medium text-hard hover:bg-hard/30"
      >
        Reveal Solution
      </button>
    )
  }

  if (!confirmed) {
    return (
      <div className="rounded-lg border border-hard/30 bg-hard/10 p-4">
        <p className="mb-3 text-sm text-hard">
          Are you sure? Try solving it yourself first. Viewing the solution too early can hurt your learning.
        </p>
        <div className="flex gap-2">
          <button
            onClick={() => setConfirmed(true)}
            className="rounded bg-hard px-3 py-1.5 text-sm font-medium text-white hover:bg-red-600"
          >
            Yes, show me
          </button>
          <button
            onClick={() => setRevealed(false)}
            className="rounded bg-surface-lighter px-3 py-1.5 text-sm font-medium text-text-muted hover:bg-border"
          >
            Go back
          </button>
        </div>
      </div>
    )
  }

  if (isReact) {
    const SolutionComponent = lazy(loader)
    return (
      <div className="rounded-lg border border-border bg-surface-light p-4">
        <h3 className="mb-3 text-sm font-semibold text-text-muted uppercase tracking-wider">Reference Solution</h3>
        <ErrorBoundary>
          <Suspense fallback={<p className="text-text-muted">Loading solution...</p>}>
            <SolutionComponent />
          </Suspense>
        </ErrorBoundary>
      </div>
    )
  }

  return (
    <div className="rounded-lg border border-border bg-surface-light p-4">
      <h3 className="mb-3 text-sm font-semibold text-text-muted uppercase tracking-wider">Reference Solution</h3>
      <p className="text-text-muted text-sm">Open the solution file in your editor to view the code.</p>
    </div>
  )
}
