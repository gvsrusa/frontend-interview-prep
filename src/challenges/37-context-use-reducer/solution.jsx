import { createContext, useContext, useReducer } from "react";
const ThemeContext = createContext(null);
function themeReducer(state, action) {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { theme: state.theme === "light" ? "dark" : "light" };
    default:
      return state;
  }
}
function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, { theme: "light" });
  return <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>;
}
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
const AuthContext = createContext(null);
function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { isAuthenticated: true, user: action.payload };
    case "LOGOUT":
      return { isAuthenticated: false, user: null };
    default:
      return state;
  }
}
function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    user: null
  });
  return <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>;
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
