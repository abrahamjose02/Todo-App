// TodoItem.jsx
import React, { useState } from 'react';
import { FaToggleOn, FaToggleOff, FaTrash, FaCheck, FaTimes, FaEdit, FaSave } from 'react-icons/fa';

const TodoItem = ({ todo, index, todos, setTodos }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
    setEditedText(todo.text);
  };

  const handleUpdate = (index, editedText) => {
    const updatedTodos = todos.map((prevTodo, idx) =>
      idx === index ? { ...prevTodo, text: editedText } : prevTodo
    );
    setTodos(updatedTodos);
  };

  const handleSave = () => {
    handleUpdate(index, editedText);
    setIsEditing(false);
  };

  const handleRemove =()=>{
    const updatedTodos = todos.filter((_,idx)=>
      idx !== index
  )
  setTodos(updatedTodos);
}

const handleComplete = ()=>{
  const updatedTodos = todos.map((prevTodo,idx)=>
idx === index ? {...prevTodo,completed:!prevTodo.completed}:prevTodo
)
setTodos(updatedTodos)
};

  const handleChange = (e) => {
    setEditedText(e.target.value);
  };

  return (
    <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b-2 py-2 gap-4">
      <div className="flex items-center">
        <span className="mr-4 text-gray-500">{index + 1}.</span>
        {isEditing ? (
          <input type="text" value={editedText} onChange={handleChange} />
        ) : (
          <span className={`mr-4 ${todo.completed ? 'line-through text-gray-500' : ''}`}>
            {todo.text}
          </span>
        )}
      </div>
      <div className="space-x-3 ml-8">
        {isEditing ? (
          <button className="mr-2 text-sm bg-green-500 text-white sm:px-2 px-1 py-1 rounded" onClick={handleSave}>
            <FaSave />
          </button>
        ) : (
          <button className="mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded" onClick={handleEdit}>
            <FaEdit />
          </button>
        )}
        <button className="mr-2 text-sm bg-blue-500 text-white sm:px-2 px-1 py-1 rounded" onClick={handleComplete}>
          {todo.completed ? <FaToggleOff /> : <FaToggleOn />}
        </button>
        <button className="mr-2 text-sm bg-red-500 text-white sm:px-2 px-1 py-1 rounded" onClick={handleRemove}>
          <FaTrash />
        </button>
        {!todo.completed && (
          <button className="text-sm bg-green-500 text-white sm:px-2 px-1 py-1 rounded" onClick={handleComplete}>
            <FaCheck />
          </button>
        )}
        {todo.completed && (
          <button className="text-sm bg-yellow-500 text-white sm:px-2 px-1 py-1 rounded" onClick={handleComplete}>
            <FaTimes />
          </button>
        )}
      </div>
    </li>
  );
};

export default TodoItem;