import React, { useState } from 'react';

interface TodoFormProps {
  addTodo: (title: string) => void;
}

const TodoForm: React.FC<TodoFormProps> = ({ addTodo }) => {
  const [title, setTitle] = useState('');
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (title !== '') {
      addTodo(title);
      setTitle('');
    } else {
      return;
    }
  };

  return (
    <form>
      <input
        className="border-gray-400 border-solid border"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleSubmit}>add todo</button>
    </form>
  );
};

export default TodoForm;
