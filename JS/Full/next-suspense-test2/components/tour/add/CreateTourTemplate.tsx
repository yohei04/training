import { useRouter } from 'next/router';
import { FC } from 'react';
import { Toaster } from 'react-hot-toast';

import { Link } from '../../link';
import { CreateTourForm } from './';

export const CreateTourTemplate: FC = () => {
  return (
    <section>
      <Toaster />
      <h2>ツアー作成</h2>
      <Link href={'/tour/add'}>ツアー一覧へ</Link>
      <CreateTourForm />
    </section>
  );
};
