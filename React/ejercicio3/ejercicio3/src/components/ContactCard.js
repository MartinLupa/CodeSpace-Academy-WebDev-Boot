export default function ContactCard({
  name,
  lastnames,
  address,
  city,
  postalCode,
  phone,
}) {
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <b> Name:</b> {name}
      </li>
      <li className="list-group-item">
        <b> Last names:</b> {lastnames}
      </li>
      <li className="list-group-item">
        <b> Addres:</b> {address}
      </li>
      <li className="list-group-item">
        <b> City:</b> {city}
      </li>
      <li className="list-group-item">
        <b> ZIP Code:</b> {postalCode}
      </li>
      <li className="list-group-item">
        <b> Phone:</b> {phone}
      </li>
    </ul>
  );
}
