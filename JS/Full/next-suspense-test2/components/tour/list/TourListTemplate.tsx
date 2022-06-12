import Link from 'next/link';
import { FC, Suspense } from 'react';

import { Spinner } from '../../spinner';
import { TourList } from './';

export const TourListTemplate: FC = () => {
  return (
    <section>
      <h2>ツアー一覧</h2>
      <div className="space-x-5 mb-10">
        <Link href={'/tour/add'}>
          <a className="text-blue-500 border-b-2 border-blue-500 hover:text-blue-700 hover:border-blue-700">
            ツアー作成へ
          </a>
        </Link>
        <Link href={'/'}>
          <a className="text-blue-500 border-b-2 border-blue-500">一覧へ</a>
        </Link>
      </div>
      <Suspense fallback={<Spinner />}>
        <TourList />
      </Suspense>
    </section>
  );
};
