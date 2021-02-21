import React, { useCallback, useState } from 'react';
import Hello from './Hello';

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prevState) => prevState + 1);
  }, [setCount]);

  return (
    <>
      <Hello increment={increment} />
      <div>count: {count}</div>
    </>
  );
};

export default App;
