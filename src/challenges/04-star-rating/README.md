# Star Rating

## Description

Build a clickable star rating component with hover preview. Stars should fill on hover and stay filled after clicking.

## Requirements

- Display `maxStars` number of star buttons (default 5)
- Clicking a star sets the rating to that star's value
- Hovering over a star fills all stars up to and including it (preview)
- Moving the mouse away reverts to the selected rating
- Show text displaying the current rating (e.g., "Rating: 3 / 5")
- Call `onChange(value)` callback when rating is set
- Each star button should have an accessible `aria-label`

## Examples

- Hover over 3rd star → first 3 stars highlight
- Click 3rd star → rating is set to 3, display shows "Rating: 3 / 5"
- Move mouse away → 3 stars remain filled
