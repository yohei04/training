import React from 'react';
import { useCountRenders } from './useCountRenders';


interface HelloProps {
  increment: () => void;
}

const Hello: React.FC<HelloProps> = React.memo(({ increment }) => {
  useCountRenders();

  return <button onClick={increment}>hello</button>;
});

export default Hello;
