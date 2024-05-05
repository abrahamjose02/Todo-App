// Todo.jsx
import React, { useState } from 'react';
import TodoList from "./TodoList";
import FilterButtons from './FilterButton';
import { BsSearch, BsPlus } from 'react-icons/bs';

const Todo = () => {
  const [newTodoText,setNewTodoText] = useState('')
  const [searchTerm,setSearchTerm] = useState('')
  const [todos,setTodos] = useState([])
  const [validationMessage,setValidationMessage] = useState('')
  const [currentFilter,setCurrentFilter] = useState('ALL')

  const handleAddTodoClick = () =>{
    if(newTodoText.trim() !== ''){

      const newTodo = {
        id:todos.length + 1,
        text:newTodoText,
        completed:false
      }
      setTodos([newTodo,...todos])
      setNewTodoText('')
      setValidationMessage('')
    }
    else{
      setValidationMessage('Todo Text is required');
    }
  }

  const handleSearchTerm =()=>{
    return todos.filter(todo=>
    todo.text.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  const markAllComplete = ()=>{
    const updatedTodos = todos.map(todo=>(
      {...todo,completed:true}
    ))
    setTodos(updatedTodos)
  }

  const handleFilterChange =(filter)=>{
    setCurrentFilter(filter)
  }
  

  return (
    <div className="max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded">
      <h2 className='mt-3 mb-6 text-2xl font-bold text-center uppercase'>Personal TODO APP</h2>
      <div className="flex items-center mb-4">
        <input
          id="addTodoInput"
          className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
          type="text"
         placeholder='Add Todo'
         value={newTodoText}
         onChange={e=>setNewTodoText(e.target.value)}
        />
        <button
          className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
          onClick={handleAddTodoClick}
        >
          <BsPlus size={20} />
        </button>
      </div>
      {validationMessage && <p className='text-red-500'>{validationMessage}</p>}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <FilterButtons markAllComplete={markAllComplete} handleFilterChange={handleFilterChange} />
        <div className="flex items-center mb-4">
          <input
            className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"
            type="text"
            placeholder="Search Todos"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none">
            <BsSearch size={20} />
          </button>
        </div>
      </div>
      
      <TodoList todos={handleSearchTerm()} setTodos={setTodos} currentFilter={currentFilter} />
      
    </div>

    
  );
};

export default Todo;
