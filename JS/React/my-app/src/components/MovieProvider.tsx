import React, { createContext, useState } from 'react'

interface MovieProviderProps {
  
}

interface IMovie {
  name: string;
  price: string;
  id: string;
}

export interface IMovieContext {
  movies: IMovie[];
  setMovies: (movies: IMovie[]) => void
}

export const MovieContext = createContext<IMovieContext | null>(null);

const MovieProvider: React.FC<MovieProviderProps> = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '$10',
      id: '111',
    },
    {
      name: 'Game of Thrones',
      price: '$20',
      id: '222',
    },
    {
      name: 'Inception',
      price: '$30',
      id: '333',
    },
  ]);

  return (
    <MovieContext.Provider value={{movies, setMovies}}>
      {props.children}
    </MovieContext.Provider>
    
  );
}

export default MovieProvider
