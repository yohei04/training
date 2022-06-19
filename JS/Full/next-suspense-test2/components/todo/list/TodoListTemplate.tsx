import { FC, useState } from 'react';

import { CreateTodo, TodoList } from './';

const initTodos = [
  {
    id: 1,
    name: 'Todo 1',
    completed: false,
  },
  {
    id: 2,
    name: 'Todo 2',
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

  const addTodo = (name: string) => {
    setTodos([...todos, { id: (todos.at(-1)?.id ?? 0) + 1, name, completed: false }]);
  };

  return (
    <section className="p-5">
      <CreateTodo addTodo={addTodo} />
      <TodoList todos={todos} />
    </section>
  );
};
