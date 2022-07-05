import { FC, memo, useCallback, useState } from 'react';

import { EditingTodoItem, Todo, ViewTodoItem } from '../';

type Props = {
  todo: Todo;
  toggleTodo: (id: number) => void;
  editTodo: (id: number, name: string) => void;
  deleteTodo: (id: number) => void;
};

export const TodoItem: FC<Props> = memo(({ todo, toggleTodo, editTodo, deleteTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const openIsEditing = useCallback(() => setIsEditing(true), []);
  const closeIsEditing = useCallback(() => setIsEditing(false), []);

  return (
    <li>
      {isEditing ? (
        <EditingTodoItem {...todo} editTodo={editTodo} closeIsEditing={closeIsEditing} />
      ) : (
        <ViewTodoItem
          {...todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          openIsEditing={openIsEditing}
        />
      )}
    </li>
  );
});

TodoItem.displayName = 'TodoItem';
