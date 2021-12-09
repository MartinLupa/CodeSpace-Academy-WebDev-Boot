import '../styles/Details.css';
import { useState, useContext } from 'react';
import useFetch from '../hooks/useFetch';
import { GlobalContext } from '../App';

export default function Details() {
  const [movieDetails, setMovieDetails] = useState([]);
  const { movieID, setWatchList, movies } = useContext(GlobalContext);

  const handleAddWatchList = (e) => {
    const toWatchMovieID = e.target.id;
    const movieToAdd = movies.filter((movie) => movie.id == toWatchMovieID);
    setWatchList((previousWatchlist) => [...previousWatchlist, movieToAdd[0]]);
  };

  const URL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US`;
  useFetch(URL, setMovieDetails);

  return (
    <div className="details-container">
      <img
        src={'https://image.tmdb.org/t/p/w500/' + movieDetails?.poster_path}
        className="movie-details-img"
        alt={movieDetails?.original_title}
      ></img>
      <div className="details-text">
        <h2>{movieDetails?.original_title}</h2>
        <p>Release date: {movieDetails?.release_date}</p>
        <p>Ranking: {movieDetails?.vote_average}</p>
        <p>{movieDetails?.overview}</p>
        <p>Produced by: </p>
        <div>
          {movieDetails.production_companies?.map((movie) => (
            <img
              src={'https://image.tmdb.org/t/p/w500/' + movie.logo_path}
              className="production-companies-logo"
              alt={movieDetails?.original_title}
            ></img>
          ))}
        </div>
        <button
          id={movieDetails?.id}
          onClick={handleAddWatchList}
          className="btn btn-outline-danger details-btn"
        >
          Add to Watch List
        </button>
      </div>
    </div>
  );
}
