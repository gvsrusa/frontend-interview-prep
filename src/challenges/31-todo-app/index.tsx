import { useState } from 'react'

interface Todo {
  id: number
  text: string
  completed: boolean
}

type Filter = 'all' | 'active' | 'completed'

export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [input, setInput] = useState('')
  const [filter, setFilter] = useState<Filter>('all')

  // TODO: Implement addTodo - create a new todo from the input
  const addTodo = () => {}

  // TODO: Implement toggleTodo - toggle the completed state
  const toggleTodo = (id: number) => {}

  // TODO: Implement deleteTodo - remove a todo by id
  const deleteTodo = (id: number) => {}

  // TODO: Implement filtering logic
  const filteredTodos = todos

  // TODO: Persist todos to localStorage

  return (
    <div>
      <h2>Todo App</h2>
      <form onSubmit={(e) => { e.preventDefault(); addTodo() }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a todo..."
        />
        <button type="submit">Add</button>
      </form>

      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>

      <ul>
        {filteredTodos.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
