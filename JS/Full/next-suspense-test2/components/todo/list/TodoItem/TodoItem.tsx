import { FC, memo } from 'react';

import { Todo } from '../';

type Props = {
  todo: Todo;
};

export const TodoItem: FC<Props> = memo(({ todo }) => {
  return (
    <li>
      <div>{todo.name}</div>
    </li>
  );
});

TodoItem.displayName = 'TodoItem';
