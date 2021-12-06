import '../styles/Details.css';
import { useState, useEffect } from 'react';
export default function Details() {
  const [movieDetails, setMovieDetails] = useState([]);

  //GET Details /movie/{movie_id}
  //https://api.themoviedb.org/3/movie/{movie_id}?api_key=58cbd250a252bc05dbeb601a8cddd6e6&language=en-US
  useEffect(() =>
    fetch(
      'https://api.themoviedb.org/3/movie/580489?api_key=58cbd250a252bc05dbeb601a8cddd6e6&language=en-US'
    )
      .then((response) => response.json())
      .then((data) => setMovieDetails(data))
  );
  return (
    <div className="details-container">
      <img
        src={'https://image.tmdb.org/t/p/w500/' + movieDetails.poster_path}
        className="movie-details-img"
        alt={movieDetails.original_title}
      ></img>
      <div className="details-text">
        <h2>{movieDetails.original_title}</h2>
        <p>Release date: {movieDetails.release_date}</p>
        <p>Ranking: {movieDetails.vote_average}</p>
        <p>{movieDetails.overview}</p>
        <p>Produced by: </p>
        {movieDetails.production_companies.map((movie) => (
          <img
            src={'https://image.tmdb.org/t/p/w500/' + movie.logo_path}
            className="production-companies-logo"
            alt={movieDetails.original_title}
          ></img>
        ))}
      </div>
    </div>
  );
}
