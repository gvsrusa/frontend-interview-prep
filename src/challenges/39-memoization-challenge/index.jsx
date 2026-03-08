import { useState } from "react";
const items = Array.from({ length: 500 }, (_, i) => ({
  id: i,
  name: `Item ${i}`,
  category: i % 3 === 0 ? "A" : i % 3 === 1 ? "B" : "C",
  value: Math.floor(Math.random() * 100)
}));
function ExpensiveList({ data, onSelect }) {
  const sorted = data.slice().sort((a, b) => a.value - b.value);
  return <ul>
      {sorted.map((item) => <li key={item.id} onClick={() => onSelect(item.id)}>
          {item.name} - {item.value}
        </li>)}
    </ul>;
}
function Summary({ data }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);
  return <div>Total value: {total}</div>;
}
export default function MemoizationChallenge() {
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const filteredItems = items.filter(
    (item) => item.name.toLowerCase().includes(filter.toLowerCase())
  );
  const handleSelect = (id) => {
    setSelectedId(id);
  };
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
