import React from 'react';
import { ITodo } from './App';


interface TodoItemProps {
  todo: ITodo;
  deleteTodo: (id: number) => void;
}

const TodoItem = ({ todo, deleteTodo }: TodoItemProps) => {
  return (
    <p onClick={() => deleteTodo(todo.id)}>
      <span className="mr-2">{todo.id}</span>
      <span>{todo.title}</span>
    </p>
  );
};

export default TodoItem;
