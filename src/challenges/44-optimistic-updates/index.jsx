import { useState } from 'react';

// Mock API with configurable failure rate
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

  // TODO: Implement optimistic toggle
  // 1. Save current state for rollback
  // 2. Immediately update the UI
  // 3. Call mockToggle
  // 4. On failure, rollback and show error
  const handleToggle = (id) => {
    // implement me
  };

  // TODO: Implement optimistic delete
  // 1. Save current state for rollback
  // 2. Immediately remove from UI
  // 3. Call mockDelete
  // 4. On failure, rollback and show error
  const handleDelete = (id) => {
    // implement me
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
