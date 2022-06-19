import { FC, memo } from 'react';

import { Todo } from '../';
import style from './TodoItem.module.css';

type Props = {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export const TodoItem: FC<Props> = memo(({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <div className={style.root}>
        <div className={style.checkbox}>
          <input
            id={`todo-${todo.id}`}
            type="checkbox"
            defaultChecked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <label htmlFor={`todo-${todo.id}`}>{todo.name}</label>
        </div>
        <div>
          <button className={style.button__danger} onClick={() => deleteTodo(todo.id)}>
            削除
          </button>
        </div>
      </div>
    </li>
  );
});

TodoItem.displayName = 'TodoItem';
