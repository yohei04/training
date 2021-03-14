import React, { useState, useEffect } from 'react';
import { TodoForm, TodoList, TodoTitle } from './components/Todo';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
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
    <>
      <TodoTitle />
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
