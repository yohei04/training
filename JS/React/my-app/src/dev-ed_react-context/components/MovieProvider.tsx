import { createContext, useReducer, useState } from 'react';
import { MovieAction, movieReducer } from './MovieReducer';

interface MovieProviderProps {}

export interface IMovie {
  name: string;
  price: string;
  id: number;
}

export interface IMovieContext {
  movies: IMovie[];
  dispatch: React.Dispatch<MovieAction>;
  // addMovie: (name: string, price: string) => void;
  // removeMovie: (id: number) => void;
}

export const MovieContext = createContext<IMovieContext>(undefined!);

const MovieProvider: React.FC<MovieProviderProps> = (props) => {
  const [movies, dispatch] = useReducer(movieReducer, []);

  return (
    <MovieContext.Provider value={{ movies, dispatch }}>
      {props.children}
    </MovieContext.Provider>
  );

  // const [movies, setMovies] = useState([
  //   {
  //     name: 'Harry Potter',
  //     price: '$10',
  //     id: 1,
  //   },
  //   {
  //     name: 'Game of Thrones',
  //     price: '$20',
  //     id: 2,
  //   },
  //   {
  //     name: 'Inception',
  //     price: '$30',
  //     id: 3,
  //   },
  // ]);

  // const addMovie = (name: string, price: string) => {
  //   setMovies([
  //     ...movies,
  //     { name, price, id: movies[movies.length - 1].id + 1 },
  //   ]);
  // };

  // const removeMovie = (id: number) => {
  //   setMovies(movies.filter((movie) => movie.id !== id));
  // };
};

export default MovieProvider;
