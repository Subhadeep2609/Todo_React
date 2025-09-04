import { useState } from "react";
import "../index.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return; // prevent empty todo

    setTodos((prev) => [
      ...prev,
      { text: input, id: Date.now() }, // unique id
    ]);
    setInput("");
  };

  const removeTodo = (id) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSubmit();
  };

  return (
    
    <div className="container">
        <h1 className="">Todo App</h1>
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

      <ul className="todos-list">
        {todos.map(({ text, id }) => (
          <li className="todo" key={id}>
            <span>{text}</span>
            <button
              type="button"
              className="close"
              onClick={() => removeTodo(id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
