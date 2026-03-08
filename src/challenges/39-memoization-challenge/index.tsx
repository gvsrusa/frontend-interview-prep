import { useState } from 'react';

// TODO: This app is slow because every state change causes all children to re-render.
// Fix it using React.memo, useMemo, and useCallback.

const items = Array.from({ length: 500 }, (_, i) => ({
  id: i,
  name: `Item ${i}`,
  category: i % 3 === 0 ? 'A' : i % 3 === 1 ? 'B' : 'C',
  value: Math.floor(Math.random() * 100),
}));

// TODO: This component re-renders every time the parent state changes.
// Wrap it with React.memo.
function ExpensiveList({ data, onSelect }: { data: typeof items; onSelect: (id: number) => void }) {
  // Simulate expensive render
  const sorted = data.slice().sort((a, b) => a.value - b.value);
  return (
    <ul>
      {sorted.map((item) => (
        <li key={item.id} onClick={() => onSelect(item.id)}>
          {item.name} - {item.value}
        </li>
      ))}
    </ul>
  );
}

// TODO: This component also re-renders unnecessarily.
function Summary({ data }: { data: typeof items }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  return <div>Total value: {total}</div>;
}

export default function MemoizationChallenge() {
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState('');
  const [selectedId, setSelectedId] = useState<number | null>(null);

  // TODO: This filtering runs on every render, even when filter hasn't changed.
  // Use useMemo to memoize it.
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );

  // TODO: This creates a new function on every render.
  // Use useCallback to stabilize it.
  const handleSelect = (id: number) => {
    setSelectedId(id);
  };

  return (
    <div>
      <h2>Memoization Challenge</h2>
      <div>
        <button onClick={() => setCount((c) => c + 1)}>
          Counter: {count}
        </button>
      </div>
      <div>
        <input
          placeholder="Filter items..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      {selectedId !== null && <p>Selected: Item {selectedId}</p>}
      <Summary data={filteredItems} />
      <ExpensiveList data={filteredItems} onSelect={handleSelect} />
    </div>
  );
}
