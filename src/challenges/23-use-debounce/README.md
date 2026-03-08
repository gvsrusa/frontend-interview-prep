# useDebounce Hook

## Description

Create a custom `useDebounce` hook that delays updating a value until a specified amount of time has passed since the last change. This is commonly used for search inputs to avoid excessive API calls.

## Requirements

- Accept a `value` of any type and a `delay` in milliseconds
- Return the debounced value
- Only update the debounced value after `delay` ms of inactivity
- Reset the timer if the value changes before the delay expires
- Clean up the timeout on unmount

## Examples

```tsx
const [search, setSearch] = useState('')
const debouncedSearch = useDebounce(search, 300)

// User types "react" quickly:
// search updates on every keystroke: 'r', 're', 'rea', 'reac', 'react'
// debouncedSearch only updates to 'react' after 300ms of no typing
```
