export default function Planner(props) {
  return (
    <ul>
      <li>{props.name}</li>
      <li>{props.lastnames}</li>
      <li>{props.address}</li>
      <li>{props.city}</li>
      <li>{props.postalCode}</li>
      <li>{props.phone}</li>
    </ul>
  );
}
