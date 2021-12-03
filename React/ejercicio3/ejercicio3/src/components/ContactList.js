export default function ContactList({ contacts }) {
  return (
    <div className="card-container row flex-wrap m-2">
      {contacts.map((contact, index) => (
        <div key={contact.phone} className="card m-1 col-md-12 col-lg-12">
          <h6>Contact {index + 1}</h6>
          <ul className="list-group">
            <li className="list-group-item">
              <b> Name:</b> {contact.name}
            </li>
            <li className="list-group-item">
              <b> Last names:</b> {contact.lastnames}
            </li>
            <li className="list-group-item">
              <b> Phone:</b> {contact.phone}
            </li>
            <li className="list-group-item">
              <b> Address:</b> {contact.address}, {contact.city},{' '}
              {contact.postalCode}
            </li>
          </ul>
          <button id={index} className="btn btn-danger">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
