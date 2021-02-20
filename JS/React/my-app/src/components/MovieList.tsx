import React, { useContext, useState } from 'react';
import Movie from './Movie';
import { IMovieContext, MovieContext } from './MovieProvider';

interface MovieListProps { }


const MovieList: React.FC<MovieListProps> = ({ }) => {
  
  const { movies, setMovies } = useContext(MovieContext) as IMovieContext;

  return (
    <>
      {movies?.map((movie) => (
        <Movie key={movie.id} name={movie.name} price={movie.price} />
      ))}
    </>
  );
};

export default MovieList;
