# Controlled vs Uncontrolled Components

## Description

Build the same form (name + email with submit) using both the controlled and uncontrolled patterns to understand the difference.

## Requirements

- **Controlled Form**: Use `useState` for each field, wire `value` and `onChange`
- **Uncontrolled Form**: Use `useRef` for each field, use `defaultValue`, read on submit
- Both forms should have Name and Email inputs with a Submit button
- On submission, display the submitted data below the form
- Both should produce the same result

## Examples

**Controlled:**
```tsx
const [name, setName] = useState('')
<input value={name} onChange={(e) => setName(e.target.value)} />
```

**Uncontrolled:**
```tsx
const nameRef = useRef(null)
<input ref={nameRef} defaultValue="" />
// On submit: nameRef.current.value
```
