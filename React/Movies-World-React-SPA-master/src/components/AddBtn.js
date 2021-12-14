export default function AddBtn({ movies, setWatchList, id }) {
  const handleAddWatchList = (e) => {
    const toWatchMovieID = parseInt(e.target.id);
    const movieToAdd = movies.filter((movie) => movie.id === toWatchMovieID);
    setWatchList((previousWatchlist) => [...previousWatchlist, movieToAdd[0]]);
  };

  const addClickSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={addClickSubmit} className="card-form">
      <button
        onClick={handleAddWatchList}
        id={id}
        className="btn btn-outline-danger card-btn"
      >
        Add to Watch List
      </button>
    </form>
  );
}
