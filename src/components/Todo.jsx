import React from 'react'

function Todo({todo, toggleComplete, removeTodo}) {

    function handleCheckboxClick() {
         toggleComplete(todo.id)
    }

    const handleRemoveClick = () => {
        removeTodo(todo.id)
    }

  return (
    <div style={{display:"flex"}}>
        <input type="checkbox" onClick={handleCheckboxClick}/>
        <li 
        style={{
            color:"white",
            textDecoration:todo.completed ? "line-through" : null,
            padding:"10px",
            border:"2px solid white"
        }}> 
            {todo.task}
        </li>
        <button onClick={handleRemoveClick} style={{
            backgroundColor:"white",
            border:"0"
        }}>X</button>
    </div>
  )
}

export default Todo