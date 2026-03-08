import { Component, useState } from 'react'

export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught:', error, errorInfo)
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback
      }
      return (
        <div role="alert">
          <h3>Something went wrong</h3>
          <p>{this.state.error?.message}</p>
          <button onClick={this.handleRetry}>Try Again</button>
        </div>
      )
    }
    return this.props.children
  }
}

function BuggyCounter() {
  const [count, setCount] = useState(0)

  if (count === 3) {
    throw new Error('Counter crashed at 3!')
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  )
}

export default function ErrorBoundaryDemo() {
  return (
    <div>
      <h2>Error Boundary</h2>
      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>
    </div>
  )
}
