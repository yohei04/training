import { FC } from 'react';

import { TourEntity } from '../../../../__generated__';
import style from './TourItem.module.css';
import { useDeleteTour } from './useDeleteTour';

type Props = {
  tour: TourEntity;
};

export const TourItem: FC<Props> = ({ tour }) => {
  const { mutate, isLoading } = useDeleteTour(tour.id);

  return (
    <div className={style.root}>
      <div className="bg-red-600 text-white ml-auto inline-block">
        <button className="px-2" disabled={isLoading} onClick={() => mutate(tour.id)}>
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
