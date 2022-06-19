import { FC, useCallback, useState } from 'react';

import { CreateTodo, TodoItem, TodoList } from './';

const initTodos = [
  {
    id: 1,
    name: 'Todo 1',
    completed: false,
  },
  {
    id: 2,
    name: 'Todo 2',
    completed: true,
  },
  {
    id: 3,
    name: 'Todo 3',
    completed: false,
  },
  {
    id: 4,
    name: 'Todo 4',
    completed: false,
  },
  {
    id: 5,
    name: 'Todo5',
    completed: true,
  },
  {
    id: 6,
    name: 'Todo 6',
    completed: false,
  },
];

export type Todo = {
  id: number;
  name: string;
  completed: boolean;
};

export const TodoListTemplate: FC = () => {
  const [todos, setTodos] = useState<Todo[]>(initTodos);

  const addTodo = useCallback((name: string) => {
    setTodos((prev) => [...prev, { id: (prev.at(-1)?.id ?? 0) + 1, name, completed: false }]);
  }, []);

  const toggleTodo = useCallback((id: number) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    );
  }, []);

  const deleteTodo = useCallback((id: number) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, []);

  return (
    <section className="p-5">
      <CreateTodo addTodo={addTodo} />
      {/* <TodoList todos={todos} /> */}
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
        ))}
      </ul>
    </section>
  );
};
