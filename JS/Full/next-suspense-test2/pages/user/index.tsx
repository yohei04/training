import { NextPage } from 'next';
import { Suspense } from 'react';

import { PostContainer } from '../../components/post';

const UserPage: NextPage = () => {
  return (
    <Suspense fallback={<h1 style={{ color: 'tomato' }}>全体をローディング中です........</h1>}>
      ユーザー一覧ページ
      {/* <PostContainer /> */}
    </Suspense>
  );
};

export default UserPage;
