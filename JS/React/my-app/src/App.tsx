import MovieList from './components/MovieList';
import MovieProvider from './components/MovieProvider';
import Nav from './components/Nav';

interface AppProps {}

const App: React.FC<AppProps> = ({}) => {
  return (
    <>
      <MovieProvider>
        <Nav />
        <MovieList />
      </MovieProvider>
    </>
  );
};

export default App;
