# Wikipedia Search

## Description
Build a live search component that queries a mock Wikipedia API with debounced input. Results update as the user types.

## Requirements
- Text input that triggers search as user types
- Debounce input by 300ms before searching
- Display results with title and snippet
- Show loading state while searching
- Handle empty queries gracefully
- Cancel stale requests when a new search starts

## Examples
- Typing "javascript" waits 300ms then shows matching articles
- Clearing the input clears results
- Fast typing only triggers one search after the user pauses
