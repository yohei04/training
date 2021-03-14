import React from 'react';
import { Todo } from '../App';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <p>
      <span className="mr-2">{todo.id}</span>
      <span>{todo.title}</span>
    </p>
  );
};

export default TodoItem;
