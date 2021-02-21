import { useContext } from 'react';
import Movie from './Movie';
import { MovieContext } from './MovieProvider';

interface MovieListProps {}

const MovieList: React.FC<MovieListProps> = ({}) => {
  const { movies } = useContext(MovieContext);

  return (
    <>
      {movies?.map((movie) => (
        <Movie
          key={movie.id}
          name={movie.name}
          price={movie.price}
          id={movie.id}
        />
      ))}
    </>
  );
};

export default MovieList;
