# useLocalStorage Hook

## Description

Create a custom `useLocalStorage` hook that works like `useState` but persists the value in `localStorage`. The value should be serialized/deserialized with JSON automatically.

## Requirements

- Accept a `key` (string) and an `initialValue` as parameters
- Return `[storedValue, setValue]` just like `useState`
- On mount, read the existing value from localStorage (if any)
- When the value is updated, sync it to localStorage
- Handle JSON serialization/deserialization automatically
- Gracefully handle errors (e.g., invalid JSON, storage quota)

## Examples

```jsx
const [name, setName] = useLocalStorage('name', '')
setName('Alice')  // state updates AND localStorage['name'] = '"Alice"'

// On next mount, name starts as 'Alice' (read from localStorage)
```
