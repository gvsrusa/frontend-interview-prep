# Dropdown Select

## Description

Build a custom dropdown select component with search filtering, keyboard navigation, and accessibility attributes.

## Requirements

- Accept `options` (array of `{ value, label }`), `value`, `onChange`, and `placeholder` props
- Toggle open/close when the trigger button is clicked
- Display a search input at the top of the open dropdown to filter options
- Highlight options with **ArrowUp/ArrowDown** keys, select with **Enter**, close with **Escape**
- Close the dropdown when clicking outside
- Show the selected option's label on the trigger button (or placeholder if none)
- Use `aria-haspopup="listbox"`, `aria-expanded`, `role="listbox"`, `role="option"`, and `aria-selected`

## Examples

```tsx
const [value, setValue] = useState('')
<DropdownSelect
  options={[
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
  ]}
  value={value}
  onChange={setValue}
  placeholder="Select a country"
/>
```
