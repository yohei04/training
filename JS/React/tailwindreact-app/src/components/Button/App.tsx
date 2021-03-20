import React from 'react';
import { Button } from '.';

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <div className="flex flex-col space-y-4">
      <Button
        bgColor={'bg-pink-900'}
        textColor={'text-gray-200'}
        color={'secondary'}
        size={'lg'}
      />
    </div>
  );
};

export default App;
