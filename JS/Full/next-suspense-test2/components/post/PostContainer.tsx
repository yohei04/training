import axios from 'axios';
import { FC, Suspense } from 'react';
import { useQuery } from 'react-query';

import { User } from '../../types/user';
import { Spinner } from '../spinner';
import { UserList2 } from '../user/UserList2';
import { PostList2 } from './PostList2';

export const PostContainer: FC = () => {
  const { data } = useQuery(['users'], getUsers, {
    suspense: true,
  });

  const userId = data![0].id;

  return (
    <div style={{ display: 'flex' }}>
      <UserList2 data={data!} />
      {/* <Suspense fallback={<h1>投稿をローディング中です........</h1>}> */}
      <Suspense fallback={<Spinner />}>
        <PostList2 userId={userId} />
      </Suspense>
    </div>
  );
};

const getUsers = async () => {
  const data = await axios.get<User[]>('http://localhost:4000/users');
  return data.data;
};
