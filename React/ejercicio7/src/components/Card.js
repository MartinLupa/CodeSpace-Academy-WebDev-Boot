import '../styles/Card.css';
import { useContext } from 'react';
import { GlobalContext } from '../App';
import { useLocation } from 'react-router-dom';

import DetailsBtn from './DetailsBtn';
import AddBtn from './AddBtn';
import DeleteBtn from './DeleteBtn';

export default function Card({ url, title, overview, release, id }) {
  const { movieID, setMovieID, movies, setWatchList, watchList } =
    useContext(GlobalContext);

  const location = useLocation();

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
        <DetailsBtn movieID={movieID} setMovieID={setMovieID} id={id} />
        {location.pathname === '/' ? (
          <AddBtn movies={movies} setWatchList={setWatchList} id={id} />
        ) : null}
        {location.pathname === '/watchlist' ? (
          <DeleteBtn
            setWatchList={setWatchList}
            watchList={watchList}
            id={id}
          />
        ) : null}
      </div>
    </div>
  );
}
