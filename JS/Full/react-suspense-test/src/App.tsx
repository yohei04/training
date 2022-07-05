import { Suspense, useState, useTransition } from 'react';

import PhotoList from './components/User/PhotoList';
import UserList from './components/User/UserList';
import UserPage from './components/User/UserPage';

function App() {
  const [visible, setVisible] = useState(false);
  const [radioButtonValue, setRadioButtonValue] = useState('user');

  const isCheckedUser = radioButtonValue === 'user';
  const isCheckedPhoto = radioButtonValue === 'photo';

  const [isPending, startTransition] = useTransition();
  const handleRadioButton = (e) => {
    // startTransition(() => {
    setRadioButtonValue(e.target.name);
    // });
  };

  return (
    <div>
      <button onClick={() => setVisible((prev) => !prev)}>fetchボタン</button>
      {visible && <UserPage />}
      <div>
        <input type="radio" id="user" name="user" onChange={handleRadioButton} checked={isCheckedUser} />
        <label htmlFor="user">ユーザー</label>

        <input type="radio" id="photo" name="photo" onChange={handleRadioButton} checked={isCheckedPhoto} />
        <label htmlFor="photo">写真</label>
      </div>

      <Suspense fallback={<h1 style={{ color: 'tomato' }}>全体をローディング中です........</h1>}>
        {/* <div style={{ color: isPending ? 'violet' : 'black' }}>{isCheckedUser ? <UserList /> : <PhotoList />}</div> */}
        {isCheckedUser ? <UserList /> : <PhotoList />}
      </Suspense>
    </div>
  );
}

export default App;
