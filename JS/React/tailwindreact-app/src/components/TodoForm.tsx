import React, { useState } from 'react'

interface TodoFormProps {
  
}

const TodoForm: React.FC<TodoFormProps> = ({}) => {
  const [title, setTitle] = useState("")
  
  return (
    <form action="">
      <input
        className="border-gray-400 border-solid border"
        type="text"
        value={title}
        onChange={(e: any) => setTitle(e.target.value)}
      />
      <button>add todo</button>
    </form>
  );
}

export default TodoForm
