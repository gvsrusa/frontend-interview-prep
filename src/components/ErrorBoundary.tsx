import { Component, type ReactNode, type ErrorInfo } from 'react'

interface Props {
  children: ReactNode
  fallback?: ReactNode
  resetKey?: number | string
}

interface State {
  hasError: boolean
  error: Error | null
  prevResetKey?: number | string
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, error: null, prevResetKey: this.props.resetKey }

  static getDerivedStateFromProps(props: Props, state: State): Partial<State> | null {
    if (props.resetKey !== undefined && props.resetKey !== state.prevResetKey) {
      return { hasError: false, error: null, prevResetKey: props.resetKey }
    }
    return null
  }

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info.componentStack)
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback

      return (
        <div className="rounded-lg border border-hard/30 bg-hard/10 p-6 text-center">
          <p className="text-hard font-semibold mb-2">Component Error</p>
          <p className="text-text-muted text-sm mb-4">
            This component threw an error. Fix the code in the editor and the preview will update automatically.
          </p>
          <pre className="text-left text-xs text-hard/80 bg-surface rounded p-3 overflow-auto max-h-40">
            {this.state.error?.message}
          </pre>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            className="mt-4 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary-dark"
          >
            Try Again
          </button>
        </div>
      )
    }

    return this.props.children
  }
}
