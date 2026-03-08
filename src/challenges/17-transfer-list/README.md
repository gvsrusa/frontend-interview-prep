# Transfer List

## Description

Build a dual-list transfer component where users can check items and move them between a left list and a right list.

## Requirements

- Accept `initialLeft` and `initialRight` string arrays as props
- Render two panels side by side, each with checkboxes for its items
- Provide a **→** (move right) button that transfers checked left items to the right
- Provide a **←** (move left) button that transfers checked right items to the left
- Disable the transfer button when no items are checked on the source side
- After transfer, uncheck the moved items
- Show "Empty" placeholder when a list has no items

## Examples

```tsx
<TransferList
  initialLeft={['JavaScript', 'TypeScript', 'Python']}
  initialRight={['Go', 'Rust']}
/>
```

Check "JavaScript" and "Python" on the left, click →, they move to the right list.
