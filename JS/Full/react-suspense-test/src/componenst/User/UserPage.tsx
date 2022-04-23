import { FC, Suspense } from 'react';

import PhotoList from './PhotoList';
import UserList from './UserList';

// 全体を一度にロード
// 全部のデータがロードされたら表示する
// const UserPage: FC = () => {
//   return (
//     <Suspense fallback={<h1 style={{ color: 'tomato' }}>全体をローディング中です........</h1>}>
//       <div style={{ display: 'flex' }}>
//         <UserList />
//         <PhotoList />
//       </div>
//     </Suspense>
//   );
// };

// 別々にロード
// ロードが完了したところから順次表示する
// const UserPage: FC = () => {
//   return (
//     <div style={{ display: 'flex' }}>
//       <Suspense fallback={<h1 style={{ color: 'tomato', width: '400px' }}>ユーザーをローディング中です........</h1>}>
//         <UserList />
//       </Suspense>

//       <Suspense fallback={<h1 style={{ color: 'lightgreen' }}>写真をローディング中です........</h1>}>
//         <PhotoList />
//       </Suspense>
//     </div>
//   );
// };

// 全体を一度にロード
// UserListがロードされるまで一番上のfallbackを表示する
// UserListがロードされたらその次のfallbackを表示する
const UserPage: FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Suspense fallback={<h1 style={{ color: 'tomato' }}>全体をローディング中です........</h1>}>
        <h1>スタティック文字列</h1>
        <UserList />
        <Suspense fallback={<h1 style={{ color: 'lightgreen' }}>写真をローディング中です........</h1>}>
          <PhotoList />
        </Suspense>
      </Suspense>
    </div>
  );
};

export default UserPage;
