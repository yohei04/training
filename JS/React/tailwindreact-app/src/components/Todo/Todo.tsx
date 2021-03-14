import React, { ReactNode } from 'react';
import TodoForm from './TodoForm';
import TodoTitle from './TodoTitle';

interface TodoProps {
  children: ReactNode;
}

const Todo = ({ children }: TodoProps) => {
  return <div>{children}</div>;
};

Todo.Title = TodoTitle;
Todo.Form = TodoForm

export default Todo;
