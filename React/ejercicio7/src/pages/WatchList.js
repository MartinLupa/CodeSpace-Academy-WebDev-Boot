import '../styles/Main.css';
import { GlobalContext } from '../App';
import { useContext } from 'react';
import Card from '../components/Card';

export default function WatchList() {
  const { watchList } = useContext(GlobalContext);
  return (
    <div className="card-container">
      {/* {watchList.map((movie) => (
        <Card
          key={movie?.id}
          url={movie?.poster_path}
          title={movie?.original_title}
          overview={movie?.overview}
          release={movie?.release_date}
          id={movie?.id}
        />
      ))} */}
    </div>
  );
}
