import { FC } from 'react';

import { Todo, TodoItem } from '../';

type Props = {
  todos: Todo[];
};

export const TodoList: FC<Props> = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
