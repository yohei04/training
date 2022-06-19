import { FC, FormEvent, memo, useCallback, useState } from 'react';

import { Todo } from '../';
import style from './TodoItem.module.css';

type Props = {
  todo: Todo;
  toggleTodo: (id: number) => void;
  editTodo: (id: number, name: string) => void;
  deleteTodo: (id: number) => void;
};

export const TodoItem: FC<Props> = memo(({ todo, toggleTodo, editTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(todo.name);

  const handleEditName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!newName.trim()) {
        return;
      }
      [newName, editTodo, todo.id];
      editTodo(todo.id, newName);
      setIsEditing(false);
    },
    [newName, editTodo, todo.id]
  );

  return (
    <li>
      {isEditing ? (
        <form className={style.root} onSubmit={handleSubmit}>
          <input type="text" value={newName} onChange={handleEditName} />
          <div className={style.buttons}>
            <button type="button" onClick={() => setIsEditing(false)}>
              キャンセル
            </button>
            <button type="submit">保存</button>
          </div>
        </form>
      ) : (
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
          <div className={style.buttons}>
            <button className={style.button__edit} onClick={() => setIsEditing(true)}>
              編集
            </button>
            <button className={style.button__danger} onClick={() => deleteTodo(todo.id)}>
              削除
            </button>
          </div>
        </div>
      )}
    </li>
  );
});

TodoItem.displayName = 'TodoItem';
