# Modal Dialog

## Description

Build an accessible modal dialog component with focus trapping, backdrop overlay, and keyboard support.

## Requirements

- Accept `isOpen`, `onClose`, `title`, and `children` props
- Render nothing when `isOpen` is false
- When open, render an overlay backdrop and centered modal content
- Close on pressing **Escape** key
- Close when clicking the backdrop (outside the modal)
- Include a **close button** (✕) with `aria-label="Close"`
- **Focus trap**: Tab cycles through focusable elements inside the modal
- Use `role="dialog"` and `aria-modal="true"`
- Use `createPortal` to render the modal at the document body

## Examples

```tsx
const [open, setOpen] = useState(false)
<button onClick={() => setOpen(true)}>Open Modal</button>
<Modal isOpen={open} onClose={() => setOpen(false)} title="Confirm">
  <p>Are you sure?</p>
  <button onClick={() => setOpen(false)}>Yes</button>
</Modal>
```
