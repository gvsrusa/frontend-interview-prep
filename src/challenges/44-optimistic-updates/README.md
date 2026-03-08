# Optimistic Updates

## Description
Implement optimistic UI updates that instantly reflect user actions and rollback on server failure. The app is a simple todo list where toggling or deleting a todo updates the UI immediately.

## Requirements
- Display a list of todos with toggle (complete/incomplete) and delete actions
- Apply state changes instantly (optimistic update) before the server responds
- Rollback to previous state if the server request fails
- Show an error message on failure
- Use a mock API with configurable failure rate

## Examples
- Toggling a todo instantly strikes it through, even before server confirms
- If the server fails, the todo reverts to its previous state and an error shows
- Deleting a todo removes it immediately; if server fails, it reappears
