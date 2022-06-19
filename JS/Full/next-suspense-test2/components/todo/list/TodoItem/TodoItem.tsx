import { FC } from 'react';

import { Todo } from '../';

type Props = {
  todo: Todo;
};

export const TodoItem: FC<Props> = ({ todo }) => {
  return (
    <li>
      <div>{todo.title}</div>
    </li>
  );
};
