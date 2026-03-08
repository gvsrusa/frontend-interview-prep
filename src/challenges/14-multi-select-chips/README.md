# Multi-Select Chips

## Description

Build a multi-select input component where selected items appear as removable chip tags, with a searchable dropdown for adding more items.

## Requirements

- Accept `options` (array of `{ value, label }`), `value` (array of selected values), and `onChange` callback
- Display selected items as **chip tags** with a **remove button** (×)
- Provide a text input to **filter/search** available options
- Show a dropdown list of options that match the search and are **not already selected**
- Clicking an option adds it to the selected list
- Clicking the × on a chip removes it from the selected list
- Close the dropdown when clicking outside

## Examples

```jsx
const [selected, setSelected] = useState([])
<MultiSelectChips
  options={[
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'angular', label: 'Angular' },
  ]}
  value={selected}
  onChange={setSelected}
/>
```

Selecting "React" and "Vue" shows two chips. Typing "ang" filters to "Angular".
