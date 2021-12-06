import '../styles/Card.css';

export default function Card({ url, title, overview, release, id }) {
  const detailedViewClick = (e) => {
    console.log(e.target.id);
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
      <button
        onClick={detailedViewClick}
        id={id}
        className="btn btn-outline-danger"
      >
        Go to details
      </button>
    </div>
  );
}
