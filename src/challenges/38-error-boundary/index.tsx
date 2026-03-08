import { Component, useState } from 'react'

// TODO: Implement ErrorBoundary as a class component
// - Track hasError and error in state
// - Implement static getDerivedStateFromError
// - Implement componentDidCatch for logging
// - Render fallback UI when an error is caught
// - Provide a retry mechanism to reset the error state
export class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    // TODO: Return updated state to render fallback UI
    return { hasError: false }
  }

  componentDidCatch(error, errorInfo) {
    // TODO: Log the error
  }

  render() {
    // TODO: Show fallback UI if hasError, otherwise render children
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
      <ErrorBoundary
        fallback={<p>Something went wrong.</p>}
      >
        <BuggyCounter />
      </ErrorBoundary>
    </div>
  )
}
