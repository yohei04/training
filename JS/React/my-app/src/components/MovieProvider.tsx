import React, { createContext, useState } from 'react'

interface MovieProviderProps {
  
}

export interface IMovie {
  name: string;
  price: string;
  id: number;
}

export interface IMovieContext {
  movies: IMovie[];
  setMovies: React.Dispatch<React.SetStateAction<IMovie[]>>;
}

export const MovieContext = createContext<IMovieContext | undefined>(undefined);

const MovieProvider: React.FC<MovieProviderProps> = (props) => {
  const [movies, setMovies] = useState([
    {
      name: 'Harry Potter',
      price: '$10',
      id: 1,
    },
    {
      name: 'Game of Thrones',
      price: '$20',
      id: 2,
    },
    {
      name: 'Inception',
      price: '$30',
      id: 3,
    },
  ]);

  return (
    <MovieContext.Provider value={{movies, setMovies}}>
      {props.children}
    </MovieContext.Provider>
    
  );
}

export default MovieProvider
