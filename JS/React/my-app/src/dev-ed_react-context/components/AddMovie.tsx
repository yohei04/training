import { useContext, useState } from 'react';
import { MovieContext } from './MovieProvider';
import { ActionType } from './MovieReducer';

interface AddMovieProps {}

const AddMovie: React.FC<AddMovieProps> = ({}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const { dispatch } = useContext(MovieContext);

  const onSubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();
    if (name && price) {
      dispatch({
        type: ActionType.ADD_MOVIE,
        payload: { name, price, id: Math.floor(Math.random() * 1000) },
      });
      // addMovie(name, price);
      setName('');
      setPrice('');
    } else {
      return;
    }
  };

  return (
    <form onSubmit={onSubmit}>
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
