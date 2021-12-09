import Card from '../components/Card';
import '../styles/Main.css';
import { GlobalContext } from '../App';
import { useContext, useEffect } from 'react';

export default function Main() {
  const { movies, setMovies } = useContext(GlobalContext);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  });
  // console.log(process.env.REACT_APP_MOVIEDB_KEY);

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
