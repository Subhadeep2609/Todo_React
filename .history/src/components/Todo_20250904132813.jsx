import { useState } from "react";
import "../index.css"
const Todo = () => {
    const [todos,setTodos] = useState([]);
    const [input,setInput] = useState("");
  return (
    <div className="container">
        <input type="text" placeholder="New Todo" value={input} onChange={(e)}/>
    </div>
  )
}

export default Todo