import { FC, memo } from 'react';

import { Todo, TodoItem } from '../';

type Props = {
  todos: Todo[];
};

export const TodoList: FC<Props> = memo(({ todos }) => {
  console.log('れんだーTodoList');
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
});

TodoList.displayName = 'TodoList';
