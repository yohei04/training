import axios from 'axios';
import { FC } from 'react';
import { useQuery } from 'react-query';

import { TourItem } from '../';
import { TourEntity } from '../../../../__generated__';
import { sleep } from '../../../../function/sleep';
import style from './TourList.module.css';

export const TourList: FC = () => {
  const { data } = useQuery(['tours'], getTours, {
    suspense: true,
  });

  return (
    <ul className={style.root}>
      {data?.map((tour) => (
        <li key={tour.id}>
          <TourItem {...tour} />
        </li>
      ))}
    </ul>
  );
};

const getTours = async () => {
  const data = await axios.get<TourEntity[]>(`http://localhost:4000/tours`);
  await sleep(1000);
  return data.data;
};
