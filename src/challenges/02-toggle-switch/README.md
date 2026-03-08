# Toggle Switch

## Description

Build a reusable toggle switch component that supports both controlled and uncontrolled modes. This tests your understanding of the controlled vs. uncontrolled component pattern.

## Requirements

- Render a toggle button that shows ON/OFF state
- Support **uncontrolled mode**: toggle manages its own internal state when no `value` prop is passed
- Support **controlled mode**: when `value` and `onChange` props are provided, use them as the source of truth
- Use `role="switch"` and `aria-checked` for accessibility
- Accept an optional `label` prop (defaults to "Toggle")

## Examples

```jsx
// Uncontrolled
<ToggleSwitch label="Notifications" />

// Controlled
const [on, setOn] = useState(false)
<ToggleSwitch value={on} onChange={setOn} label="Dark Mode" />
```
