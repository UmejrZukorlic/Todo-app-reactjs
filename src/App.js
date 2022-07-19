import React, { useEffect,useState } from 'react'
import './App.css';
import TodoForm from './components/TodoForm.jsx';
import TodoList from './components/TodoList.jsx'

const LOCAL_STORAGE_KEY = "react-todo-list-todos";

function App() {
  const [todos,setTodos]=useState([])

  useEffect(()=>{
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if(storageTodos){
      setTodos(storageTodos)
    }
  },[])

  useEffect(()=>{
     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  },[todos])

  const addTodo = (todo) => { 
    setTodos([todo,...todos]);
     
  }

  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>{
        if (todo.id === id) {
          return{
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
    )
  }
  const removeTodo= (id) => {
    setTodos(todos.filter(todo =>todo.id !== id))
  }

  return (
    <div className='todo-app'>
      <header className='App-header'>
        <p style={{
          fontSize:"50px"
        }}>TO-DO APP</p>
        <TodoForm addTodo={addTodo}/>
        <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
      </header>
    </div>
  );
}

export default App;
