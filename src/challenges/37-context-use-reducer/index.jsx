import { createContext, useContext } from "react";
const ThemeContext = createContext(null);
function themeReducer(state, action) {
  return state;
}
function ThemeProvider({ children }) {
  return <>{children}</>;
}
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
const AuthContext = createContext(null);
function authReducer(state, action) {
  return state;
}
function AuthProvider({ children }) {
  return <>{children}</>;
}
function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within AuthProvider");
  return context;
}
function ThemeToggle() {
  const { state, dispatch } = useTheme();
  return <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}>
      Theme: {state.theme}
    </button>;
}
function AuthControls() {
  const { state, dispatch } = useAuth();
  return <div>
      {state.isAuthenticated ? <>
          <p>Logged in as: {state.user}</p>
          <button onClick={() => dispatch({ type: "LOGOUT" })}>Logout</button>
        </> : <button onClick={() => dispatch({ type: "LOGIN", payload: "Alice" })}>
          Login as Alice
        </button>}
    </div>;
}
export default function ContextReducerDemo() {
  return <ThemeProvider>
      <AuthProvider>
        <h2>Context + useReducer</h2>
        <ThemeToggle />
        <AuthControls />
      </AuthProvider>
    </ThemeProvider>;
}
export { AuthProvider, ThemeProvider, useAuth, useTheme };
