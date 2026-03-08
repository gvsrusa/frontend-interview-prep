import { useState, useMemo, useCallback, memo } from "react";
const items = Array.from({ length: 500 }, (_, i) => ({
  id: i,
  name: `Item ${i}`,
  category: i % 3 === 0 ? "A" : i % 3 === 1 ? "B" : "C",
  value: Math.floor(Math.random() * 100)
}));
const ExpensiveList = memo(function ExpensiveList2({
  data,
  onSelect
}) {
  const sorted = useMemo(
    () => data.slice().sort((a, b) => a.value - b.value),
    [data]
  );
  return <ul>
      {sorted.map((item) => <li key={item.id} onClick={() => onSelect(item.id)}>
          {item.name} - {item.value}
        </li>)}
    </ul>;
});
const Summary = memo(function Summary2({ data }) {
  const total = useMemo(
    () => data.reduce((sum, item) => sum + item.value, 0),
    [data]
  );
  return <div>Total value: {total}</div>;
});
export default function MemoizationChallenge() {
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const filteredItems = useMemo(
    () => items.filter(
      (item) => item.name.toLowerCase().includes(filter.toLowerCase())
    ),
    [filter]
  );
  const handleSelect = useCallback((id) => {
    setSelectedId(id);
  }, []);
  return <div>
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
    </div>;
}
