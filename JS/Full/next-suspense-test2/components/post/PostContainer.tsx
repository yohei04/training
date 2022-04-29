import axios from 'axios';
import Link from 'next/link';
import { FC, Suspense, useCallback, useState, useTransition } from 'react';

import { Spinner } from '../spinner';
import { UserList2 } from '../user/UserList2';
import { Weather } from '../weather';
import { CreatePost2 } from './';
import { PostList2 } from './PostList2';

type Props = {
  queryId: string;
};

export const PostContainer: FC<Props> = ({ queryId }) => {
  const [selectedUserId, setSelectedUserId] = useState(Number(queryId));

  const [isPending, startTransition] = useTransition();

  const handleSelectedUserId = useCallback((id: number) => {
    startTransition(() => {
      setSelectedUserId(id);
    });
  }, []);

  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <div style={{ display: 'flex' }}>
        {/* <Suspense fallback={<h1 style={{ color: 'tomato' }}>全体をローディング中です........</h1>}> */}
        <UserList2 selectedUserId={selectedUserId} handleSelectedUserId={handleSelectedUserId} />
        {/* <Suspense fallback={<h1>投稿をローディング中です........</h1>}> */}
        <section>
          <CreatePost2 userId={selectedUserId} />
          {/* <Suspense fallback={<div className="w-[30rem] h-32 bg-yellow-100 "></div>}> */}
          <PostList2 userId={selectedUserId} />
          {/* </Suspense> */}
        </section>
        <Suspense fallback={<Spinner />}>
          <Weather />
        </Suspense>
        {/* </Suspense> */}
      </div>
    </div>
  );
};
