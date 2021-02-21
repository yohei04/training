import React, { useContext } from 'react';
import { MovieContext } from './MovieProvider';
import { ActionType } from './MovieReducer';

interface MovieProps {
  name: string;
  price: string;
  id: number
}

const Movie: React.FC<MovieProps> = ({ name, price, id }) => {
  const { dispatch } = useContext(MovieContext);

  return (
    <li
      onClick={() =>
        dispatch({
          type: ActionType.REMOVE_MOVIE,
          payload: { name, price, id },
        })
      }
    >
      <span>{name} </span>
      <span>{price}</span>
    </li>
  );
};

export default Movie;
