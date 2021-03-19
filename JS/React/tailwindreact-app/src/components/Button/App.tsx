import React from 'react'
import { Button } from '.';


interface AppProps {
  
}

const App: React.FC<AppProps> = ({}) => {
  return (
    <>
      <Button bgColor={'bg-green-400'} textColor={'test-red-400'} />
    </>
  );
}

export default App
