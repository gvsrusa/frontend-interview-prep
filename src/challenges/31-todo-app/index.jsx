import { useState } from "react";
export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const addTodo = () => {
  };
  const toggleTodo = (id) => {
  };
  const deleteTodo = (id) => {
  };
  const filteredTodos = todos;
  return <div>
      <h2>Todo App</h2>
      <form onSubmit={(e) => {
    e.preventDefault();
    addTodo();
  }}>
        <input
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Add a todo..."
  />
        <button type="submit">Add</button>
      </form>

      <div>
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>

      <ul>
        {filteredTodos.map((todo) => <li key={todo.id}>
            <input
    type="checkbox"
    checked={todo.completed}
    onChange={() => toggleTodo(todo.id)}
  />
            <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>)}
      </ul>
    </div>;
}
