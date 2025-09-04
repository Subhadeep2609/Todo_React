import { useState } from "react";
import "../index.css"
const Todo = () => {
    const [todos,setTodos] = useState([]);
    const [input,setInput] = useState("");
    const handleSubmit = ()=>{
        setTodos((todos))
    }

  return (
    <div className="container">
        <input type="text" placeholder="New Todo" value={input} onChange={(e)=>setInput(e.target.value)}/>

        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Todo