import { createContext, useContext, useReducer, type ReactNode } from 'react'

// --- Theme Context ---
type Theme = 'light' | 'dark'
type ThemeAction = { type: 'TOGGLE_THEME' }

interface ThemeState {
  theme: Theme
}

const ThemeContext = createContext<{
  state: ThemeState
  dispatch: React.Dispatch<ThemeAction>
} | null>(null)

function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  // TODO: Handle TOGGLE_THEME action
  return state
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  // TODO: Use useReducer with themeReducer
  // TODO: Provide state and dispatch via context
  return <>{children}</>
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}

// --- Auth Context ---
type AuthAction =
  | { type: 'LOGIN'; payload: string }
  | { type: 'LOGOUT' }

interface AuthState {
  isAuthenticated: boolean
  user: string | null
}

const AuthContext = createContext<{
  state: AuthState
  dispatch: React.Dispatch<AuthAction>
} | null>(null)

function authReducer(state: AuthState, action: AuthAction): AuthState {
  // TODO: Handle LOGIN and LOGOUT actions
  return state
}

export function AuthProvider({ children }: { children: ReactNode }) {
  // TODO: Use useReducer with authReducer
  // TODO: Provide state and dispatch via context
  return <>{children}</>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}

// --- Demo ---
function ThemeToggle() {
  const { state, dispatch } = useTheme()
  return (
    <button onClick={() => dispatch({ type: 'TOGGLE_THEME' })}>
      Theme: {state.theme}
    </button>
  )
}

function AuthControls() {
  const { state, dispatch } = useAuth()
  return (
    <div>
      {state.isAuthenticated ? (
        <>
          <p>Logged in as: {state.user}</p>
          <button onClick={() => dispatch({ type: 'LOGOUT' })}>Logout</button>
        </>
      ) : (
        <button onClick={() => dispatch({ type: 'LOGIN', payload: 'Alice' })}>
          Login as Alice
        </button>
      )}
    </div>
  )
}

export default function ContextReducerDemo() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <h2>Context + useReducer</h2>
        <ThemeToggle />
        <AuthControls />
      </AuthProvider>
    </ThemeProvider>
  )
}
