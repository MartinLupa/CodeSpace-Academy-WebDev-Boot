import Card from '../components/Card';
import '../styles/Main.css';
import { useState, useEffect } from 'react';

export default function Main() {
  const [movies, setMovies] = useState([]);

  // https://api.themoviedb.org/3/movie/popular?api_key=58cbd250a252bc05dbeb601a8cddd6e6&language=en-US&page=1
  useEffect(() => {
    fetch(
      'https://api.themoviedb.org/3/movie/popular?api_key=58cbd250a252bc05dbeb601a8cddd6e6&language=en-US&page=1'
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  });

  return (
    <div className="card-container">
      {movies.map((movie) => (
        <Card
          url={movie.poster_path}
          title={movie.original_title}
          overview={movie.overview}
          release={movie.release_date}
          id={movie.id}
        />
      ))}
    </div>
  );
}
