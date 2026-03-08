import { useState, useEffect, useRef, useCallback } from 'react';

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
  const [showDropdown, setShowDropdown] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  const cache = useRef({});
  const timerRef = useRef(null);

  const search = useCallback(async (q) => {
    if (!q.trim()) {
      setResults([]);
      setShowDropdown(false);
      return;
    }
    if (cache.current[q]) {
      setResults(cache.current[q]);
      setShowDropdown(true);
      return;
    }
    setLoading(true);
    try {
      const data = await searchAPI(q);
      cache.current[q] = data;
      setResults(data);
      setShowDropdown(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => search(query), 300);
    return () => clearTimeout(timerRef.current);
  }, [query, search]);

  const handleKeyDown = (e) => {
    if (!showDropdown) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter' && highlightIndex >= 0) {
      e.preventDefault();
      setQuery(results[highlightIndex]);
      setShowDropdown(false);
      setHighlightIndex(-1);
    } else if (e.key === 'Escape') {
      setShowDropdown(false);
      setHighlightIndex(-1);
    }
  };

  const selectItem = (item) => {
    setQuery(item);
    setShowDropdown(false);
    setHighlightIndex(-1);
  };

  return (
    <div>
      <h2>Autocomplete</h2>
      <div style={{ position: 'relative', maxWidth: 400 }}>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setHighlightIndex(-1);
          }}
          onKeyDown={handleKeyDown}
          placeholder="Search frameworks..."
          style={{ width: '100%', padding: '8px' }}
        />
        {loading && <p>Loading...</p>}
        {showDropdown && results.length > 0 && (
          <ul
            role="listbox"
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              border: '1px solid #ccc',
              background: '#fff',
              listStyle: 'none',
              margin: 0,
              padding: 0,
              maxHeight: 200,
              overflowY: 'auto',
              zIndex: 10,
            }}
          >
            {results.map((item, idx) => (
              <li
                key={item}
                role="option"
                aria-selected={idx === highlightIndex}
                onClick={() => selectItem(item)}
                style={{
                  padding: '8px 12px',
                  cursor: 'pointer',
                  background: idx === highlightIndex ? '#e0e7ff' : 'transparent',
                }}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
