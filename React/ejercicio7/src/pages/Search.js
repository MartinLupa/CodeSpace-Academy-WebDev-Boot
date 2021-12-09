import '../styles/Search.css';
import { useState, useEffect } from 'react';
import Card from '../components/Card';
import { GlobalContext } from '../App';
import { useContext } from 'react';

export default function Search() {
  const [query, setQuery] = useState('');
  const { movies, setMovies } = useContext(GlobalContext);
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US&query=${query}&page=1&include_adult=false`;

  const handleQueryChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  });

  return (
    <div className="search-main-container">
      <form className="movie-search-form" action="">
        <div className="form-group">
          <label htmlFor="query"></label>
          <input
            id="query"
            type="text"
            className="form-text text-muted form-control"
            placeholder="Search movie.."
            onChange={handleQueryChange}
            value={query}
          />
        </div>
      </form>
      <div className="main-container">
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
    </div>
  );
}
