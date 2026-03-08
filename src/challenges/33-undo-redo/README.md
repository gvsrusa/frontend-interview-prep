# Undo/Redo

## Description

Build an undo/redo system using past and future stacks. Create a `useUndoRedo` hook that manages state with full undo and redo capabilities.

## Requirements

- Maintain a `past` stack and a `future` stack alongside the current state
- `set(newState)`: push current state to past, clear future, update to new state
- `undo()`: pop from past, push current to future, restore previous state
- `redo()`: pop from future, push current to past, restore next state
- Expose `canUndo` and `canRedo` booleans
- New changes after an undo should clear the redo stack

## Examples

```tsx
const { state, set, undo, redo, canUndo, canRedo } = useUndoRedo('')

set('A')  // state: 'A', past: [''], future: []
set('B')  // state: 'B', past: ['', 'A'], future: []
undo()    // state: 'A', past: [''], future: ['B']
redo()    // state: 'B', past: ['', 'A'], future: []
```
