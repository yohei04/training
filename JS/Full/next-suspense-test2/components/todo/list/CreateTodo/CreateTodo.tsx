import { FC, FormEvent, memo, useState } from 'react';

type Props = {
  addTodo: (name: string) => void;
};

export const CreateTodo: FC<Props> = memo(({ addTodo }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) {
      return;
    }
    addTodo(name);
    // setName('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit">追加</button>
    </form>
  );
});

CreateTodo.displayName = 'CreateTodo';
