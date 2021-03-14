import React from 'react';
import TodoTitle from './TodoTitle';
import { TodoTitleProps } from './TodoTitle';

interface TodoProps {
  Title: React.FC<TodoTitleProps>;
}

const Todo: React.FC & TodoProps = ({ children }) => {
  return <div>{children}</div>;
};

Todo.Title = TodoTitle;

export default Todo;
