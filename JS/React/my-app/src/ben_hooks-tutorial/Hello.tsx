import React from 'react';
import { useCountRenders } from './useCountRenders';


interface HelloProps {
  increment: () => void;
}

const Hello: React.FC<HelloProps> = ({ increment }) => {
  useCountRenders();

  return (
    <div>
      <h1>Hello コンポーネント</h1>
      <button onClick={increment}>hello</button>
    </div>
  );
};

export default React.memo(Hello);
