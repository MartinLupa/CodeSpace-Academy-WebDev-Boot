import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GlobalContext } from '../App';
import '../styles/Card.css';

export default function Card({ url, title, overview, release, id }) {
  const { movieID, setMovieID, movies, setWatchList } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  const handleDetailsClick = (e) => {
    setMovieID(e.target.id);
  };

  const detailsClickSubmit = () => {
    navigate(`details/${movieID}`);
  };

  const handleAddWatchList = (e) => {
    const toWatchMovieID = e.target.id;
    const movieToAdd = movies.filter((movie) => movie.id == toWatchMovieID);
    setWatchList((previousWatchlist) => [...previousWatchlist, movieToAdd[0]]);
    console.log(movieToAdd[0]);
  };

  const addClickSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="card">
      <img
        src={'https://image.tmdb.org/t/p/w500/' + url}
        className="card-img-top"
        alt={title}
      ></img>
      <div className="card-body">
        <h4 className="card-text">{title}</h4>
        <p className="card-text">{overview.slice(0, 220) + '...'}</p>
        <p>Released {release}</p>
      </div>
      <div className="card-btn-container">
        <form className="card-form" onSubmit={detailsClickSubmit} action="">
          <button
            onClick={handleDetailsClick}
            id={id}
            className="btn btn-outline-danger card-btn"
          >
            Go to details
          </button>
        </form>
        <form onSubmit={addClickSubmit} className="card-form">
          <button
            onClick={handleAddWatchList}
            id={id}
            className="btn btn-outline-danger card-btn"
          >
            Add to Watch List
          </button>
        </form>
      </div>
    </div>
  );
}
