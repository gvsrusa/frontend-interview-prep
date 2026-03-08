# Error Boundary

## Description

Build a reusable Error Boundary component using a class component. It should catch JavaScript errors in its child component tree, display a fallback UI, and provide a retry mechanism.

## Requirements

- Must be a class component (React hooks cannot catch render errors)
- Implement `static getDerivedStateFromError` to update state when an error is caught
- Implement `componentDidCatch` for error logging
- Show a fallback UI when an error occurs
- Accept an optional `fallback` prop for custom error UI
- Provide a "Try Again" button that resets the error state
- Render children normally when there is no error

## Examples

```jsx
<ErrorBoundary fallback={<p>Something went wrong!</p>}>
  <MyComponent />  {/* If this throws, fallback is shown */}
</ErrorBoundary>

<ErrorBoundary>
  <MyComponent />  {/* Default error UI with retry button */}
</ErrorBoundary>
```
