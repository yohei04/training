import { FC, memo } from 'react';

import { Todo } from '../';
import style from './TodoItem.module.css';

type Props = {
  todo: Todo;
  toggleTodo: (id: number) => void;
};

export const TodoItem: FC<Props> = memo(({ todo, toggleTodo }) => {
  return (
    <li>
      <div className={style.root}>
        <input
          id={`todo-${todo.id}`}
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />
        <label htmlFor={`todo-${todo.id}`}>{todo.name}</label>
      </div>
    </li>
  );
});

TodoItem.displayName = 'TodoItem';
