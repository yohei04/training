import { NextPage } from 'next';

import { CreateTour } from '../../components/tour/add';

export const AddTourPage: NextPage = () => {
  return (
    <div>
      <CreateTour />
    </div>
  );
};

export default AddTourPage;
