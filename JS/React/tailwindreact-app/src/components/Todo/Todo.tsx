import React, { ReactNode } from 'react';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';
import TodoList from './TodoList';
import TodoTitle from './TodoTitle';

interface TodoProps {
  children: ReactNode;
}

const Todo = ({ children }: TodoProps) => {
  return <div>{children}</div>;
};

Todo.Title = TodoTitle;
Todo.Form = TodoForm
Todo.List = TodoList
Todo.Item = TodoItem

export default Todo;
