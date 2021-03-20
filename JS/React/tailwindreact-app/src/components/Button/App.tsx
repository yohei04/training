import React from 'react';
import { Button } from '.';

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <>
      <Button bgColor={'bg-pink-900'} textColor={'text-gray-200'} />
    </>
  );
};

export default App;
