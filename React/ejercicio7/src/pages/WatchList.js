import '../styles/Main.css';
import '../styles/WatchList.css';
import { GlobalContext } from '../App';
import { useContext } from 'react';
import Card from '../components/Card';

export default function WatchList({ deleteBtnState }) {
  const { watchList } = useContext(GlobalContext);

  return (
    <div className="watchlist-container">
      {watchList.length === 0 ? (
        <h4>Please add a movie to watch.</h4>
      ) : (
        <div className="card-container">
          {watchList.map((movie) => (
            <Card
              key={movie?.id}
              url={movie?.poster_path}
              title={movie?.original_title}
              overview={movie?.overview}
              release={movie?.release_date}
              id={movie?.id}
              false={deleteBtnState}
            />
          ))}
        </div>
      )}
    </div>
  );
}
