import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({todos,setTodos,currentFilter}) => {
  const filterTodos = () => {
    switch (currentFilter) {
      case 'COMPLETED':
        return todos.filter(todo => todo.completed);
      case 'INCOMPLETE':
        return todos.filter(todo => !todo.completed);
      default:
        return todos;
    }
  }
  return (
    <ul>
      <li className="my-2 text-sm italic">All Your Notes Here...</li>
      {filterTodos().map((todo,index)=>(
        <TodoItem
        key={todo.id}
        todo={todo}
        index={index}
        todos={todos}
        setTodos={setTodos}
      />
      ))}
    </ul>
  );
};

export default TodoList;