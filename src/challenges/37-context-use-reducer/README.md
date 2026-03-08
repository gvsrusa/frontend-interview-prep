# Context + useReducer

## Description

Build a theme and authentication system using React Context combined with `useReducer` for structured state management with dispatched actions.

## Requirements

- **ThemeProvider**: Manages `light`/`dark` theme via `useReducer`
- **AuthProvider**: Manages login/logout state via `useReducer`
- Each context has its own provider, reducer, and custom hook
- `useTheme()` returns `{ state, dispatch }` for theme
- `useAuth()` returns `{ state, dispatch }` for auth
- Custom hooks throw an error if used outside their provider
- Actions: `TOGGLE_THEME`, `LOGIN` (with username payload), `LOGOUT`

## Examples

```tsx
// Theme
dispatch({ type: 'TOGGLE_THEME' })  // light → dark → light

// Auth
dispatch({ type: 'LOGIN', payload: 'Alice' })  // { isAuthenticated: true, user: 'Alice' }
dispatch({ type: 'LOGOUT' })                     // { isAuthenticated: false, user: null }
```
