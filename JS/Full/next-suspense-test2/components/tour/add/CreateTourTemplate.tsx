import { FC } from 'react';
import { Toaster } from 'react-hot-toast';

import { Link } from '../../link';
import { CreateTourForm } from './';

export const CreateTourTemplate: FC = () => {
  return (
    <section>
      <Toaster />
      <h2>ツアー作成</h2>
      <Link href={'/tour'}>ツアー一覧へ</Link>
      <CreateTourForm />
    </section>
  );
};
