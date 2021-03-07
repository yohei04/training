import React, { useEffect, useState } from 'react';

interface TodoListProps {}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const TodoList: React.FC<TodoListProps> = ({}) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const fetchData = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
      );
      const data: Todo[] = await fetchData.json();
      const formatData = data.map((d) => ({
        id: d.id,
        title: d.title,
        completed: d.completed,
      }));
      setTodos(formatData);
      //   .then((response) => response.json())
      //   .then(json => setTodos(json))
      // // .then((json) => console.log(json));
    };

    fetchTodos();
  }, []);

  console.log(todos);
  return (
    <>
      <div className="todoList">
        {todos.map((t) => (
          <p>
            <span className="mr-2">{t.id}</span>
            <span>{t.title}</span>
          </p>
        ))}
      </div>
    </>
  );
};

export default TodoList;
