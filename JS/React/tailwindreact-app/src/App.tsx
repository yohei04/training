import { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

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
      <div className="px-4 pb-4">hello world</div>
      <TodoForm todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} />
    </>
  );
}

export default App;
