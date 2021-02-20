import { createContext, useState } from 'react';

interface MovieProviderProps {}

export interface IMovie {
  name: string;
  price: string;
  id: number;
}

export interface IMovieContext {
  movies: IMovie[];
  addMovie: (name: string, price: string) => void;
}

export const MovieContext = createContext<IMovieContext>(undefined!);

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

  const addMovie = (name: string, price: string) => {
    setMovies([
      ...movies,
      { name, price, id: movies[movies.length - 1].id + 1 },
    ]);
  };

  return (
    <MovieContext.Provider value={{ movies, addMovie }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
