import React, { useEffect } from 'react';

interface TodoListProps {}

const TodoList: React.FC<TodoListProps> = ({}) => {
  useEffect(() => {
    const fetchTodos = async () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then((response) => response.json())
        .then((json) => console.log(json));
    };

    fetchTodos();
  }, []);

  return <></>;
};

export default TodoList;
