import { NextPage } from 'next';

import { CreateTourTemplate } from '../../components/tour/add';

export const AddTourPage: NextPage = () => {
  return (
    <>
      <CreateTourTemplate />
    </>
  );
};

export default AddTourPage;
