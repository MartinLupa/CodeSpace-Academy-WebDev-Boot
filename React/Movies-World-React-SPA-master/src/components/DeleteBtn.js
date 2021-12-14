export default function DeleteBtn({ id, setWatchList, watchList }) {
  const handleDelete = (id) => {
    setWatchList(watchList.filter((movie) => movie.id !== id));
  };

  const deleteBtnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={deleteBtnSubmit} className="card-form">
      <button
        onClick={() => handleDelete(id)}
        id={id}
        className="btn btn-outline-danger card-btn"
      >
        Delete
      </button>
    </form>
  );
}
