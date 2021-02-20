import React, { useContext } from 'react';
import { IMovieContext, MovieContext } from './MovieProvider';

const Nav = () => {
  const { movies } = useContext(MovieContext);

  return (
    <nav>
      <h3>Dev Ed</h3>
      <p>List of Movies: {movies.length}</p>
    </nav>
  );
};

export default Nav;
