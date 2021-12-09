import { useNavigate } from 'react-router-dom';

export default function DetailsBtn({ movieID, setMovieID, id }) {
  const handleDetailsClick = (e) => {
    setMovieID(e.target.id);
  };

  const navigate = useNavigate();
  const detailsClickSubmit = () => {
    navigate(`details/${movieID}`);
  };

  return (
    <form className="card-form" onSubmit={detailsClickSubmit} action="">
      <button
        onClick={handleDetailsClick}
        id={id}
        className="btn btn-outline-danger card-btn"
      >
        Go to details
      </button>
    </form>
  );
}
