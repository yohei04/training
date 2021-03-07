import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';

interface TodoListProps {}

export interface Todo {
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
    };

    fetchTodos();
  }, []);
  
  return (
    <div className="todoList">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
