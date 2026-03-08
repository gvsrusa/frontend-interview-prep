import { useState } from 'react';

// Mock API — simulates server search
const MOCK_DATA = [
  'React', 'React Native', 'Redux', 'Relay', 'Remix',
  'Angular', 'Astro', 'Alpine.js',
  'Vue', 'Vite', 'Vitest', 'Vuex',
  'Svelte', 'SvelteKit', 'Solid', 'SolidStart',
  'Next.js', 'Nuxt', 'Nest.js', 'Node.js',
  'TypeScript', 'Tailwind', 'Turborepo', 'tRPC',
];

function searchAPI(query) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const results = MOCK_DATA.filter((item) =>
        item.toLowerCase().includes(query.toLowerCase())
      );
      resolve(results);
    }, 200);
  });
}

export default function Autocomplete() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  // TODO: Implement debounced search (300ms delay)
  // TODO: Cache results by query string
  // TODO: Add keyboard navigation (ArrowUp, ArrowDown, Enter, Escape)
  // TODO: Track highlighted index for keyboard nav
  // TODO: Show dropdown with results

  return (
    <div>
      <h2>Autocomplete</h2>
      <div style={{ position: 'relative', maxWidth: 400 }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search frameworks..."
          style={{ width: '100%', padding: '8px' }}
        />
        {loading && <p>Loading...</p>}
        {/* TODO: Render results dropdown here */}
      </div>
    </div>
  );
}
