import axios from 'axios';
import { FC } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { TourEntity } from '../../../../__generated__';
import style from './TourItem.module.css';

type Props = {
  tour: TourEntity;
};

export const TourItem: FC<Props> = ({ tour }) => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(deleteTour, {
    onSuccess: () => {
      queryClient.setQueriesData<TourEntity[]>(['tours'], (old) =>
        old ? old.filter((t) => t.id !== tour.id) : []
      );
    },
  });

  return (
    <div className={style.root}>
      <div className="bg-red-600 text-white ml-auto inline-block">
        <button className="px-2" onClick={() => mutate({ tourId: tour.id })}>
          x
        </button>
      </div>
      <h3 className={style.title}>{tour.name}</h3>
      <p>{tour.tourType}</p>
      <p>{tour.timeType}</p>
      <p>{tour.country}</p>
      <p>{tour.participantsNumber}</p>
      <p>{tour.description}</p>
    </div>
  );
};

const deleteTour = ({ tourId }: { tourId: number }) => {
  return axios.delete<TourEntity>(`http://localhost:4000/tours/${tourId}`);
};
