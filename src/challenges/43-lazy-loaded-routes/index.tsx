import { useState, Suspense } from 'react';

// TODO: Use React.lazy to lazily load each page component
// Since we can't use separate files in this challenge, simulate lazy loading
// by wrapping inline components with a delayed dynamic import pattern.

// Page components (in a real app these would be in separate files)
function Home() {
  return <div><h3>Home Page</h3><p>Welcome to the app!</p></div>;
}

function About() {
  return <div><h3>About Page</h3><p>Learn more about us.</p></div>;
}

function Dashboard() {
  return <div><h3>Dashboard</h3><p>Your analytics and stats.</p></div>;
}

type Route = 'home' | 'about' | 'dashboard';

export default function LazyLoadedRoutes() {
  const [route, setRoute] = useState<Route>('home');

  // TODO: Replace direct component rendering with React.lazy + Suspense
  // TODO: Add a Suspense boundary with a loading fallback

  const renderPage = () => {
    switch (route) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'dashboard': return <Dashboard />;
    }
  };

  return (
    <div>
      <h2>Lazy Loaded Routes</h2>
      <nav style={{ display: 'flex', gap: 8, marginBottom: 16 }}>
        {(['home', 'about', 'dashboard'] as Route[]).map((r) => (
          <button
            key={r}
            onClick={() => setRoute(r)}
            style={{ fontWeight: route === r ? 'bold' : 'normal' }}
          >
            {r.charAt(0).toUpperCase() + r.slice(1)}
          </button>
        ))}
      </nav>
      {renderPage()}
    </div>
  );
}
