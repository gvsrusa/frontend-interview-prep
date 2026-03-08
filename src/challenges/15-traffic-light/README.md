# Traffic Light

## Description

Build a traffic light component that cycles through red, green, and yellow using a state machine with configurable durations.

## Requirements

- Render three circles arranged vertically: red (top), yellow (middle), green (bottom)
- Only one light is "active" (bright) at a time; inactive lights are dimmed
- Start on **red**
- Cycle: **red → green → yellow → red** (repeating)
- Accept an optional `config` prop: `{ red: ms, yellow: ms, green: ms }` for durations
- Default durations: red = 4000ms, yellow = 500ms, green = 3000ms
- Use `setTimeout` and clean up timers properly
- Each light should have an `aria-label` indicating its state

## Examples

With `config={{ red: 2000, yellow: 500, green: 1500 }}`:
- 0-2s: red active
- 2-3.5s: green active
- 3.5-4s: yellow active
- 4s: back to red
