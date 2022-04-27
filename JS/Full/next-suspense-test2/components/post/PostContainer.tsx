import axios from 'axios';
import Link from 'next/link';
import { FC, Suspense, useCallback, useState } from 'react';

import { Spinner } from '../spinner';
import { UserList2 } from '../user/UserList2';
import { Weather } from '../weather';
import { PostList2 } from './PostList2';

type Props = {
  queryId: string;
};

export const PostContainer: FC<Props> = ({ queryId }) => {
  const [selectedUserId, setSelectedUserId] = useState(Number(queryId));

  const handleSelectedUserId = useCallback((id: number) => {
    setSelectedUserId(id);
  }, []);

  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <div style={{ display: 'flex' }}>
        <Suspense fallback={<h1 style={{ color: 'tomato' }}>全体をローディング中です........</h1>}>
          <UserList2 selectedUserId={selectedUserId} handleSelectedUserId={handleSelectedUserId} />
          {/* <Suspense fallback={<h1>投稿をローディング中です........</h1>}> */}
          <Suspense
            fallback={
              <div style={{ width: '500px', height: '300px', background: 'lightyellow' }}></div>
            }
          >
            <PostList2 userId={selectedUserId} />
          </Suspense>
          <Suspense fallback={<Spinner />}>
            <Weather />
          </Suspense>
        </Suspense>
      </div>
    </div>
  );
};
