import React, { useState } from 'react';
import { Todo } from '../App';

interface TodoFormProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoForm: React.FC<TodoFormProps> = ({ todos, setTodos }) => {
  const [title, setTitle] = useState('');
  const addTodo = () => {
    if (title !== '') {
      setTodos([
        ...todos,
        { id: todos.length + 1, title: title, completed: false },
      ]);
      setTitle('');
    } else {
      return;
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        className="border-gray-400 border-solid border"
        type="text"
        value={title}
        onChange={(e: any) => setTitle(e.target.value)}
      />
      <button onClick={addTodo}>add todo</button>
    </form>
  );
};

export default TodoForm;
