import { useState, useEffect } from 'react'
import React from 'react'
import './App.css'
import { TodoProvider } from './contexts'
import TodoForm from './components/TodoFrom'
import TodoItem from './components/TodoItems'

function App() {
  const [todos, Settodos] = useState([])
  
  const addTodo = (todo) => {
    Settodos((prev) => [{id: Date.now(), ...todo}, ...prev])
  }
  
  const updateTodo = (id, todo) => {
    Settodos((prev) => (
      prev.map((previoustodo) => (
        previoustodo.id === id ? todo : previoustodo
      ))
    ))
  }
  
  const deleteTodo = (id) => {
    Settodos((prev) => prev.filter((todo) => todo.id !== id))  // ← Fixed filter logic
  }
  
  const toggleComplete = (id) => {
    Settodos((prev) => (
      prev.map((previoustodo) => (
        previoustodo.id === id 
          ? {...previoustodo, completed: !previoustodo.completed}  // ← Fixed typo: complted → completed
          : previoustodo
      ))
    ))
  }
  
  // Load todos from localStorage on mount
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      Settodos(todos)
    }
  }, [])
  
  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <TodoForm/>
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => (
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App