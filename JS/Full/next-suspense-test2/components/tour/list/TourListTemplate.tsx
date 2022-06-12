import { FC, Suspense } from 'react';

import { Link } from '../../link';
import { Spinner } from '../../spinner';
import { TourList } from './';

export const TourListTemplate: FC = () => {
  return (
    <section>
      <h2>ツアー一覧</h2>
      <div className="space-x-5 mb-10">
        <Link href={'/tour/add'}>ツアー作成へ</Link>
        <Link href={'/tour/add'}>一覧へ</Link>
      </div>
      <Suspense fallback={<Spinner />}>
        <TourList />
      </Suspense>
    </section>
  );
};
