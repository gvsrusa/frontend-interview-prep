# Tooltip

## Description

Build a reusable tooltip component that appears on hover and focus with configurable positioning.

## Requirements

- Accept `text` (string), `position` ('top' | 'bottom' | 'left' | 'right'), and `children` props
- Default position is 'top'
- Show tooltip on mouse enter and focus
- Hide tooltip on mouse leave and blur
- Use `role="tooltip"` for accessibility
- Position the tooltip correctly relative to the wrapped element using absolute positioning
- Tooltip should not interfere with clicking the wrapped element

## Examples

```tsx
<Tooltip text="Save your progress" position="bottom">
  <button>Save</button>
</Tooltip>
```

Hovering or focusing the button shows "Save your progress" below it.
