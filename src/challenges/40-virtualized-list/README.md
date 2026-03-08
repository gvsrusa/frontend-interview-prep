# Virtualized List

## Description
Render 10,000 items efficiently using a windowing/virtualization technique. Only the visible items (plus a small buffer) should be in the DOM at any time.

## Requirements
- Render a list of 10,000 items without external libraries
- Only mount DOM nodes for visible items (windowing)
- Maintain smooth scrolling behavior
- Each item has a fixed height
- Display the item index and content

## Examples
- Scrolling through the list feels smooth despite 10,000 items
- Inspecting the DOM shows only ~20-30 items rendered at a time
- The scrollbar reflects the full list height
