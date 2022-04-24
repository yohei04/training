import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, Suspense } from 'react';
import { useQuery } from 'react-query';

import { User } from '../../types/user';
import { Spinner } from '../spinner';
import { UserList2 } from '../user/UserList2';
import { PostList2 } from './PostList2';

export const PostContainer: FC = () => {
  const { query } = useRouter();
  const userId: number = query.id ? Number(query.id) : 1;

  const { data: users } = useQuery(['users'], getUsers, {
    suspense: true,
    enabled: !!userId,
  });

  if (!query.id) return <h1>queryが取得できてない</h1>;

  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <div style={{ display: 'flex' }}>
        <UserList2 users={users!} />
        {/* <Suspense fallback={<h1>投稿をローディング中です........</h1>}> */}
        <Suspense fallback={<Spinner />}>
          <PostList2 userId={userId} />
        </Suspense>
      </div>
    </div>
  );
};

const getUsers = async () => {
  const data = await axios.get<User[]>('http://localhost:4000/users');
  return data.data;
};
