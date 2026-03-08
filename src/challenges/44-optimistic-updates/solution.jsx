import { useState } from 'react';

const FAILURE_RATE = 0.3;

function mockToggle(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > FAILURE_RATE ? resolve({ id }) : reject(new Error('Server error'));
    }, 800);
  });
}

function mockDelete(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > FAILURE_RATE ? resolve({ id }) : reject(new Error('Server error'));
    }, 800);
  });
}

const initialTodos = [
  { id: 1, text: 'Buy groceries', completed: false },
  { id: 2, text: 'Walk the dog', completed: false },
  { id: 3, text: 'Read a book', completed: true },
  { id: 4, text: 'Write code', completed: false },
  { id: 5, text: 'Exercise', completed: false },
];

export default function OptimisticUpdates() {
  const [todos, setTodos] = useState(initialTodos);
  const [error, setError] = useState(null);

  const handleToggle = async (id) => {
    setError(null);
    const previousTodos = [...todos];

    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );

    try {
      await mockToggle(id);
    } catch {
      setTodos(previousTodos);
      setError(`Failed to toggle "${previousTodos.find((t) => t.id === id)?.text}"`);
    }
  };

  const handleDelete = async (id) => {
    setError(null);
    const previousTodos = [...todos];

    setTodos((prev) => prev.filter((t) => t.id !== id));

    try {
      await mockDelete(id);
    } catch {
      setTodos(previousTodos);
      setError(`Failed to delete "${previousTodos.find((t) => t.id === id)?.text}"`);
    }
  };

  return (
    <div>
      <h2>Optimistic Updates</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
            <span
              onClick={() => handleToggle(todo.id)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
                flex: 1,
              }}
            >
              {todo.text}
            </span>
            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
