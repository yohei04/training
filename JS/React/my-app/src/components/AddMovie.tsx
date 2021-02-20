import React, { useContext, useState } from 'react';
import { IMovie, IMovieContext, MovieContext } from './MovieProvider';

interface AddMovieProps {}

const AddMovie: React.FC<AddMovieProps> = ({}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const { movies, setMovies } = useContext(MovieContext) as IMovieContext;
  console.log(movies);

  const addMovie = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();
    setMovies((prevState: IMovie[]) => [
      ...prevState,
      { name, price, id: prevState[prevState.length - 1].id + 1 },
    ]);
    setName('');
    setPrice('');
  };

  return (
    <form onSubmit={addMovie}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type={'submit'}>Submit</button>
    </form>
  );
};

export default AddMovie;
