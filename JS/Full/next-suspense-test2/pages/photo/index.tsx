import { NextPage } from 'next';
import { FC, Suspense } from 'react';

import {
  PhotoList,
  PhotoListPagination,
  PhotoListPagination2,
} from '../../components/photo';

const PhotoPage: NextPage = () => {
  return (
    <Suspense fallback={<h1 style={{ color: 'lightgreen' }}>写真をローディング中です........</h1>}>
      {/* <PhotoList /> */}
      {/* <PhotoListPagination /> */}
      <PhotoListPagination2 />
    </Suspense>
  );
};

export default PhotoPage;
