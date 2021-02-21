import AddMovie from './components/AddMovie';
import MovieList from './components/MovieList';
import MovieProvider from './components/MovieProvider';
import Nav from './components/Nav';

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <>
      <MovieProvider>
        <Nav />
        <AddMovie />
        <MovieList />
      </MovieProvider>
    </>
  );
};

export default App;
