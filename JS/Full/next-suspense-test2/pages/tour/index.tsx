import { NextPage } from 'next';
import { Toaster } from 'react-hot-toast';

import { TourListTemplate } from '../../components/tour/list';

const TourListPage: NextPage = () => {
  return (
    <>
      <Toaster />
      <TourListTemplate />
    </>
  );
};

export default TourListPage;
