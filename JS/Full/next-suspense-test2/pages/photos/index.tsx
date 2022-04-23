import { NextPage } from 'next';
import { FC, Suspense } from 'react';

import PhotoList from '../../components/User/PhotoList';
import PhotoListPagination from '../../components/User/PhotoListPagination';
import { PhotoListPagination2 } from '../../components/User/PhotoListPagination2';

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
