import React from 'react';
import Posts from './components/posts/Posts';

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <div className="">
      <Posts />
    </div>
  );
};

export default App;
