import "../styles/Details.css";
import { BASE_URL, IMG_PATH } from "../settings";
import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../App";

export default function Details() {
  const [movieDetails, setMovieDetails] = useState([]);
  const { movieID, setWatchList, movies } = useContext(GlobalContext);

  const handleAddWatchList = (e) => {
    const toWatchMovieID = parseInt(e.target.id);
    console.log(typeof id, typeof toWatchMovieID);
    const movieToAdd = movies.filter((movie) => movie.id === toWatchMovieID);
    setWatchList((previousWatchlist) => [...previousWatchlist, movieToAdd[0]]);
  };

  const URL = `${BASE_URL}/movie/${movieID}?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&language=en-US`;
  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setMovieDetails(data))
      .catch((err) => err);
  });

  return (
    <div className="details-container">
      <img
        src={IMG_PATH + movieDetails?.poster_path}
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
              key={movieDetails?.id}
              src={IMG_PATH + movie.logo_path}
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
