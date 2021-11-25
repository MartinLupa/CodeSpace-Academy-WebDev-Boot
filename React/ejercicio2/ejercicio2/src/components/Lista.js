export default function Lista(props) {
  return (
    <div>
      <h3>{props.category}</h3>
      <ul>
        <li>{props.product}</li>
      </ul>
    </div>
  );
}
