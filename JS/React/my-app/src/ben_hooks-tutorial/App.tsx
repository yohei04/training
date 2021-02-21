import React, { useState } from 'react';
import Hello from './Hello';

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Hello increment={() => setCount(count + 1)} />
      <div>count: {count}</div>
    </>
  );
};

export default App;
