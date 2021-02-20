import React from 'react';

interface MovieProps {
  name: string;
  price: string;
}

const Movie: React.FC<MovieProps> = ({ name, price }) => {
  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
    </>
  );
};

export default Movie;
