import '../styles/Main.css';
import Card from '../components/Card';
import { useContext, useEffect } from 'react';
import { GlobalContext } from '../App';

export default function Main() {
  const { movies, setMovies } = useContext(GlobalContext);
  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US&page=1`;

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((err) => err);
  });

  return (
    <div className="main-container">
      <h2>Popular movies</h2>
      <div className="card-container">
        {movies?.map((movie) => (
          <Card
            key={movie.id}
            url={movie.poster_path}
            title={movie.original_title}
            overview={movie.overview}
            release={movie.release_date}
            id={movie.id}
          />
        ))}
      </div>
    </div>
  );
}
