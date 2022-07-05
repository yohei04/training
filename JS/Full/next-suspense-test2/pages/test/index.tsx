import { NextPage } from 'next';
import { FC, Suspense } from 'react';

import { PhotoList } from '../../components/photo';
import { UserList } from '../../components/user';

// 全体を一度にロード
// UserListがロードされるまで一番上のfallbackを表示する
// UserListがロードされたらその次のfallbackを表示する
const TestPage: NextPage = () => {
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

export default TestPage;
