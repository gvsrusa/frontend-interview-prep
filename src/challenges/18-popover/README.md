# Popover

## Description

Build a click-triggered popover component that displays floating content and dismisses when clicking outside.

## Requirements

- Accept `trigger` (ReactNode), `content` (ReactNode), and optional `position` ('top' | 'bottom' | 'left' | 'right') props
- Default position is 'bottom'
- Clicking the trigger **toggles** the popover open/closed
- Clicking **outside** the popover container closes it
- Use `role="dialog"` on the popover content panel
- Position the content panel relative to the trigger using absolute positioning

## Examples

```jsx
<Popover
  trigger={<button>Settings</button>}
  content={
    <div>
      <p>Theme: Dark</p>
      <p>Language: English</p>
    </div>
  }
  position="bottom"
/>
```

Clicking "Settings" opens a floating panel below it. Clicking elsewhere closes it.
