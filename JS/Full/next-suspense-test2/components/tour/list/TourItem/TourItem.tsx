import { FC } from 'react';

import style from './TourItem.module.css';
import { useDeleteTour } from './useDeleteTour';

type Props = {
  id: number;
  name: string;
  tourType: string;
  timeType: string;
  country: string;
  participantsNumber: number;
  description: string;
};

export const TourItem: FC<Props> = ({
  id,
  name,
  tourType,
  timeType,
  country,
  participantsNumber,
  description,
}) => {
  const { mutate, isLoading } = useDeleteTour(id);

  return (
    <div className={style.root}>
      <div className="bg-red-600 text-white ml-auto inline-block">
        <button className="px-2" disabled={isLoading} onClick={() => mutate(id)}>
          x
        </button>
      </div>
      <h3 className={style.title}>{name}</h3>
      <p>{tourType}</p>
      <p>{timeType}</p>
      <p>{country}</p>
      <p>{participantsNumber}</p>
      <p>{description}</p>
    </div>
  );
};
