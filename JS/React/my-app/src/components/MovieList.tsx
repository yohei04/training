import React, { useContext, useState } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieProvider';

interface MovieListProps {}

const MovieList: React.FC<MovieListProps> = ({}) => {
  const { movies } = useContext(MovieContext);

  return (
    <>
      {movies?.map((movie) => (
        <Movie key={movie.id} name={movie.name} price={movie.price} />
      ))}
    </>
  );
};

export default MovieList;
