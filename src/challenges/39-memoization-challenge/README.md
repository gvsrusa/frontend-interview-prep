# Memoization Challenge

## Description
Fix a slow React app by applying memoization techniques. The app has a parent component that updates frequently, causing unnecessary re-renders of expensive child components.

## Requirements
- Identify components that re-render unnecessarily
- Apply `React.memo` to prevent child re-renders when props haven't changed
- Use `useMemo` to memoize expensive computed values
- Use `useCallback` to stabilize function references passed as props
- The app should remain functionally identical after optimization

## Examples
- A parent counter increments without re-rendering an expensive filtered list
- A search input updates without re-computing unrelated sorted data
- Button click handlers maintain stable references across renders
