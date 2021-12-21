import { useState, createContext } from 'react';
import Router from './Router';

export const GlobalContext = createContext();

function App() {
  const [movies, setMovies] = useState([]);
  const [movieID, setMovieID] = useState();
  const [watchList, setWatchList] = useState([]);

  return (
    <div>
      <GlobalContext.Provider
        value={{
          movies,
          setMovies,
          movieID,
          setMovieID,
          watchList,
          setWatchList,
        }}
      >
        <Router />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
