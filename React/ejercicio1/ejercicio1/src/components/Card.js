<<<<<<< HEAD
import { useState } from "react";
import "./Card.css";

export default function Card(props) {
  const [count, setCount] = useState(0);
  function handleClick(event) {
    setCount(count + 1);
  }
  return (
    <div className="card-frame">
      <div className="top">
        <img className="card-img" src={props.url} alt="" />
        <div className="card-description">
          <h3>{props.title}</h3>
          <p className="card-text">{props.cardText}</p>
          <a className="btn-link" href={props.btnHref}>
            More info..
          </a>
        </div>
      </div>
      <div className="card-footer">
        <button onClick={handleClick} className="card-btn">
          Add to cart
        </button>
        <p className="counter">{count}</p>
=======
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
>>>>>>> 44d0fe80134f2e8ceeb3ea441320a31ce6c5e438
      </div>
    </div>
  );
}
