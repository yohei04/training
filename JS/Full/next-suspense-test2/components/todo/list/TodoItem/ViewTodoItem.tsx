import { FC } from 'react';

import style from './TodoItem.module.css';

type Props = {
  id: number;
  name: string;
  completed: boolean;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  openIsEditing: () => void;
};

export const ViewTodoItem: FC<Props> = ({
  id,
  name,
  completed,
  toggleTodo,
  deleteTodo,
  openIsEditing,
}) => {
  return (
    <div className={style.root}>
      <div className={style.checkbox}>
        <input
          id={`todo-${id}`}
          type="checkbox"
          defaultChecked={completed}
          onChange={() => toggleTodo(id)}
        />
        <label htmlFor={`todo-${id}`}>{name}</label>
      </div>
      <div className={style.buttons}>
        <button className={style.button__edit} onClick={openIsEditing}>
          編集
        </button>
        <button className={style.button__danger} onClick={() => deleteTodo(id)}>
          削除
        </button>
      </div>
    </div>
  );
};
