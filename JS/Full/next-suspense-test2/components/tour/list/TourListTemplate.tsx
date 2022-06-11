import { FC, Suspense } from 'react';

import { TourList } from './';

export const TourListTemplate: FC = () => {
  return (
    <section>
      <h2>ツアー一覧</h2>
      <Suspense fallback={<h1 style={{ color: 'tomato' }}>ツアーをローディング中です........</h1>}>
        <TourList />
      </Suspense>
    </section>
  );
};
