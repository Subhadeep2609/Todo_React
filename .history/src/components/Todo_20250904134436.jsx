import { useState } from "react";
import "../index.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  // Add todo
  const handleSubmit = () => {
    if (!input.trim()) return; // prevent empty todo

    setTodos((prev) => [
      ...prev,
      { text: input, id: Date.now() }, // unique ID
    ]);
    setInput("");
  };

  // Remove todo
  const removeTodo = (id) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));

  // Handle Enter key
  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    <div className="container">
      {/* Input + Button */}
      <div className="input-group">
        <input
          type="text"
          placeholder="New Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      {/* Todos List */}
      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li className="todo" key={id}>
            <span>{text}</span>
            <button
              type="button"
              className="close"
              onClick={() => removeTodo(id)}
            >
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
