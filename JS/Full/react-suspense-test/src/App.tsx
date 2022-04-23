import { useState } from 'react';

import UserPage from './componenst/User/UserPage';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible((prev) => !prev)}>fetchボタン</button>
      {visible && <UserPage />}
    </div>
  );
}

export default App;
