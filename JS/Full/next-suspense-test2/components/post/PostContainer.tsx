import axios from 'axios';
import clsx from 'clsx';
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
    // startTransition(() => {
    setSelectedUserId(id);
    // });
  }, []);

  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <span>{isPending && 'ペンディング中'}</span>
      {/* <Suspense fallback={<h1 style={{ color: 'tomato' }}>全体をローディング中です........</h1>}> */}
      <div
        className={clsx('grid grid-cols-[150px_minmax(300px,_1fr)_200px]', {
          'opacity-50': isPending,
        })}
      >
        <section className="p-4">
          <Suspense fallback={<div>ユーザーを読み込み中です........</div>}>
            <UserList2
              selectedUserId={selectedUserId}
              handleSelectedUserId={handleSelectedUserId}
            />
          </Suspense>
        </section>
        <section className="p-4">
          <CreatePost2 userId={selectedUserId} />
          <Suspense fallback={<div>投稿を読み込み中です........</div>}>
            <PostList2 userId={selectedUserId} />
          </Suspense>
        </section>
        <section className="p-4">
          <Suspense fallback={<Spinner />}>
            <Weather />
          </Suspense>
        </section>
      </div>
      {/* </Suspense> */}
    </div>
  );
};
