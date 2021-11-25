import './Card.css';

export default function Card(props) {
  return (
    <div className="card-frame">
      <img className="card-img" src={props.url} alt="" />
      <div className="card-description">
        <h3>{props.title}</h3>
        <p className="card-text">{props.cardText}</p>
        <button className="card-btn">
          <a className="btn-link" href={props.btnHref}>
            {props.btnText}
          </a>
        </button>
      </div>
    </div>
  );
}
