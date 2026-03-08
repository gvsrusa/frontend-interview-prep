# Progress Bar

## Description

Build an animated progress bar component that visually represents a percentage value with proper accessibility attributes.

## Requirements

- Accept a `value` prop (number) representing the percentage
- Accept an optional `label` prop
- Clamp the value between 0 and 100
- Render a bar whose width corresponds to the percentage
- Display the percentage as text (e.g., "75%")
- Use `role="progressbar"` with `aria-valuenow`, `aria-valuemin`, and `aria-valuemax`
- Include a smooth CSS transition when the value changes

## Examples

- `<ProgressBar value={50} />` → bar fills to 50%, shows "50%"
- `<ProgressBar value={-5} />` → clamps to 0%, bar is empty
- `<ProgressBar value={120} />` → clamps to 100%, bar is full
