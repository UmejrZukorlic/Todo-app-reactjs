import React from 'react'
import Todo from './Todo.jsx'

function TodoList({todos, toggleComplete, removeTodo}) {
  return <ul style={{
    fontSize: "24px",
    listStyleType: "none",
    
  }}>
    {todos.map(todo=>(
    <Todo key={todo.id} todo={todo} toggleComplete={toggleComplete} removeTodo={removeTodo}/>)
    )}
  </ul>
}

export default TodoList