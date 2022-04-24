import { NextPage } from 'next';
import { FC, Suspense } from 'react';

import { PostList, PostList2 } from '../../components/post';
import { PostContainer } from '../../components/post/PostContainer';

const PostPage: NextPage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Suspense fallback={<h1 style={{ color: 'tomato' }}>全体をローディング中です........</h1>}>
        {/* <PostList /> */}
        <PostContainer />
      </Suspense>
    </div>
  );
};

export default PostPage;
