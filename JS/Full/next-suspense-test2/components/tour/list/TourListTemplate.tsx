import Link from 'next/link';
import { FC, Suspense } from 'react';

import { TourList } from './';

export const TourListTemplate: FC = () => {
  return (
    <section>
      <h2>ツアー一覧</h2>
      <div className="space-x-5 mb-10">
        <Link href={'/tour/add'}>
          <a className="text-blue-500 border-b-2 border-blue-500">ツアー作成へ</a>
        </Link>
        <Link href={'/'}>
          <a className="text-blue-500 border-b-2 border-blue-500">一覧へ</a>
        </Link>
      </div>
      <Suspense fallback={<h1 style={{ color: 'tomato' }}>ツアーをローディング中です........</h1>}>
        <TourList />
      </Suspense>
    </section>
  );
};
