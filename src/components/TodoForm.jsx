import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

function TodoForm({addTodo}) {
    const [todo,setTodo] = useState({
        id: '',
        task: "",
        completed: false
    });

    const handleTaskInputChange = (e) => {
        setTodo({...todo, task: e.target.value})
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (todo.task.trim()) {
            addTodo({...todo, id: uuidv4()})

            setTodo({...todo, task: ""})
        }
    }

  return <form onSubmit={handleSubmit}>
    <input 
    name='task'
    type="text" 
    value={todo.task}
    onChange={handleTaskInputChange}
    style={{
        fontSize:"30px"
    }}/>
    <button type='submit' style={{
        width:"100px",
        height:"40px",
        transform:"translateY(-5px)"
    }}>Submit</button>
  </form>
}

export default TodoForm