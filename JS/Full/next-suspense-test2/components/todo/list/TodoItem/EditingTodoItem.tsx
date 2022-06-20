import { FC, FormEvent, memo, useCallback, useState } from 'react';

import style from './TodoItem.module.css';

type Props = {
  id: number;
  name: string;
  editTodo: (id: number, name: string) => void;
  closeIsEditing: () => void;
};

export const EditingTodoItem: FC<Props> = ({ id, name, editTodo, closeIsEditing }) => {
  const [newName, setNewName] = useState(name);

  const handleNewName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  }, []);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (!newName.trim()) {
        return;
      }

      editTodo(id, newName);
      closeIsEditing();
    },
    [newName, editTodo, id, closeIsEditing]
  );

  return (
    <form className={style.root} onSubmit={handleSubmit}>
      <input type="text" value={newName} onChange={handleNewName} />
      <div className={style.buttons}>
        <button type="button" onClick={closeIsEditing}>
          キャンセル
        </button>
        <button type="submit">保存</button>
      </div>
    </form>
  );
};
