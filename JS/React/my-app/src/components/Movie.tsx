import React, { useContext } from 'react';
import { MovieContext } from './MovieProvider';

interface MovieProps {
  name: string;
  price: string;
  id: number
}

const Movie: React.FC<MovieProps> = ({ name, price, id }) => {
  const { removeMovie } = useContext(MovieContext);

  return (
    <li onClick={() => removeMovie(id)}>
      <span>{name} </span>
      <span>{price}</span>
    </li>
  );
};

export default Movie;
