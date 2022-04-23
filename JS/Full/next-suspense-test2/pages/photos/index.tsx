import { NextPage } from 'next';
import { FC, Suspense } from 'react';

import PhotoList from '../../components/User/PhotoList';
import PhotoListPagination from '../../components/User/PhotoListPagination';

const PhotoPage: NextPage = () => {
  return (
    <Suspense fallback={<h1 style={{ color: 'lightgreen' }}>写真をローディング中です........</h1>}>
      {/* <PhotoList /> */}
      <PhotoListPagination />
    </Suspense>
  );
};

export default PhotoPage;
