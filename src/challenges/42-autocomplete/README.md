# Autocomplete

## Description
Build a debounced autocomplete search input with result caching and full keyboard navigation.

## Requirements
- Debounce search input (300ms) before querying the mock API
- Cache results so repeated queries don't re-fetch
- Display results in a dropdown below the input
- Support keyboard navigation: ArrowUp/ArrowDown to move, Enter to select, Escape to close
- Show loading state while fetching
- Highlight the currently focused result

## Examples
- Typing "rea" waits 300ms, then shows matching results like "React", "React Native"
- Pressing ArrowDown highlights the next result
- Pressing Enter selects the highlighted result and fills the input
- Typing "rea" again uses cached results (no loading state)
