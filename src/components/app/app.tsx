import MainPage from '../../pages/main/main';

type AppProps = {
  filmName: string;
  genre: string;
  releaseDate: string;
};

const App = ({
  filmName,
  genre,
  releaseDate,
}: AppProps): React.JSX.Element => (
  <MainPage filmName={filmName} genre={genre} releaseDate={releaseDate} />
);
export default App;
