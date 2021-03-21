import React from 'react';
import { Button, Button2 } from '.';

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <>
      <div className="my-4 text-center space-x-5">
        <Button bgColor={'bg-pink-900'} textColor={'text-gray-200'} color={'primary'} size={'sm'} />
        <Button bgColor={'bg-pink-900'} textColor={'text-gray-200'} color={'secondary'} size={'lg'} />
      </div>
      <div className="text-center space-x-5">
        <Button2 color={'primary'} size={'sm'} />
        <Button2 color={'secondary'} size={'lg'} />
      </div>
    </>
  );
};

export default App;
