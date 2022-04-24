import { NextPage } from 'next';
import { Suspense } from 'react';

import { PostContainer } from '../../components/post';
import { Spinner } from '../../components/spinner';

const UserPage: NextPage = () => {
  return (
    // <Suspense fallback={<h1 style={{ color: 'tomato' }}>全体をローディング中です........</h1>}>
    <Suspense fallback={<Spinner />}>
      <PostContainer />
    </Suspense>
  );
};

export default UserPage;
