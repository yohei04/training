import { FC, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

import { CustomErrorBoundary } from '../../error-boundary/CustomErrorBoundary';
import { Link } from '../../link';
import { Spinner } from '../../spinner';
import { TourList } from './';

export const TourListTemplate: FC = () => {
  return (
    <section>
      <Toaster />
      <h2>ツアー一覧</h2>
      <div className="space-x-5 mb-10">
        <Link href={'/tour/add'}>ツアー作成へ</Link>
        <Link href={'/'}>一覧へ</Link>
      </div>
      <CustomErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <TourList />
        </Suspense>
      </CustomErrorBoundary>
    </section>
  );
};
