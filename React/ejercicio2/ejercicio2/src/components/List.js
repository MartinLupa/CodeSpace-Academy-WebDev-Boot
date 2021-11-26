export default function List(props) {
  return (
    <div>
      <ul>
        <li>
          {props.product} - {props.brand} - ${props.price}
        </li>
      </ul>
    </div>
  );
}
