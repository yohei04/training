import { FC, useState } from 'react';

import { TodoList } from './';

const initTodos = [
  {
    id: 1,
    title: 'Todo 1',
    completed: false,
  },
  {
    id: 2,
    title: 'Todo 2',
    completed: false,
  },
];

export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

export const TodoListTemplate: FC = () => {
  const [title, setTitle] = useState('');
  const [todos, setTodos] = useState<Todo[]>(initTodos);

  console.log({ todos });

  return (
    <section className="p-5">
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      <button
        onClick={() =>
          setTodos([...todos, { id: (todos.at(-1)?.id ?? 0) + 1, title: title, completed: false }])
        }
      >
        ボタン
      </button>
      <TodoList todos={todos} />
    </section>
  );
};
