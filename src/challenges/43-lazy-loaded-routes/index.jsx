import { useState } from "react";
function Home() {
  return <div><h3>Home Page</h3><p>Welcome to the app!</p></div>;
}
function About() {
  return <div><h3>About Page</h3><p>Learn more about us.</p></div>;
}
function Dashboard() {
  return <div><h3>Dashboard</h3><p>Your analytics and stats.</p></div>;
}
export default function LazyLoadedRoutes() {
  const [route, setRoute] = useState("home");
  const renderPage = () => {
    switch (route) {
      case "home":
        return <Home />;
      case "about":
        return <About />;
      case "dashboard":
        return <Dashboard />;
    }
  };
  return <div>
      <h2>Lazy Loaded Routes</h2>
      <nav style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        {["home", "about", "dashboard"].map((r) => <button
    key={r}
    onClick={() => setRoute(r)}
    style={{ fontWeight: route === r ? "bold" : "normal" }}
  >
            {r.charAt(0).toUpperCase() + r.slice(1)}
          </button>)}
      </nav>
      {renderPage()}
    </div>;
}
