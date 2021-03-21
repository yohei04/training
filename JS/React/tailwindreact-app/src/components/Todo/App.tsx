import React, { useState, useEffect } from 'react';
import { Todo } from '.';

export interface ITodo {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const addTodo = (title: string) => {
    setTodos([
      ...todos,
      { id: todos.length + 1, title: title, completed: false },
    ]);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // useEffect(() => {
  //   const fetchTodos = async () => {
  //     const fetchData = await fetch(
  //       'https://jsonplaceholder.typicode.com/todos'
  //     );
  //     const data: Todo[] = await fetchData.json();
  //     const formatData = data.map((d) => ({
  //       id: d.id,
  //       title: d.title,
  //       completed: d.completed,
  //     }));
  //     setTodos(formatData);
  //   };

  //   fetchTodos();
  // }, []);

  return (
    <Todo>
      <Todo.Title />
      <Todo.Form addTodo={addTodo} />
      <Todo.List todos={todos} deleteTodo={deleteTodo} />
    </Todo>
  );
}

export default App;
