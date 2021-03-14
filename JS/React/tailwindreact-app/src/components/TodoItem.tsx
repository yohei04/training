import React from 'react';
import { Todo } from '../App';

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, deleteTodo }) => {
  return (
    <p onClick={() => deleteTodo(todo.id)}>
      <span className="mr-2">{todo.id}</span>
      <span>{todo.title}</span>
    </p>
  );
};

export default TodoItem;
