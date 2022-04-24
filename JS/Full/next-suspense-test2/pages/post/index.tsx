import { NextPage } from 'next';
import { FC, Suspense } from 'react';

import { PostList } from '../../components/post';
import { UserList } from '../../components/user';

const PostPage: NextPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Suspense fallback={<h1 style={{ color: 'tomato' }}>全体をローディング中です........</h1>}>
        <PostList />
      </Suspense>
    </div>
  );
};

export default PostPage;
