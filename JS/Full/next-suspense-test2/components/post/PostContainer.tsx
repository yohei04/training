import axios from 'axios';
import clsx from 'clsx';
import Link from 'next/link';
import { FC, Suspense, useCallback, useState, useTransition } from 'react';

import { FX } from '../fx';
import { Quote } from '../quote';
import { Spinner } from '../spinner';
import { UserList2 } from '../user/UserList2';
import { Weather } from '../weather';
import { PostListSection2 } from './';

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
        className={clsx('grid grid-cols-[150px_minmax(300px,_1fr)_300px]', {
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
          <PostListSection2 userId={selectedUserId} />
        </section>
        <section className="p-4 space-y-6">
          {/* <Suspense fallback={<Spinner />}>
              <Weather />
            </Suspense> */}
          <Suspense fallback={<Spinner />}>
            <FX />
          </Suspense>
          <Suspense fallback={<Spinner />}>{/* <Quote /> */}</Suspense>
        </section>
      </div>
      {/* </Suspense> */}
    </div>
  );
};
