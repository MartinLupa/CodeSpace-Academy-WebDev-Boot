export default function ContactList({ contacts, setContacts }) {
  //-----------------------------
  //Clase React N° 5 hora 00:25:00 - Explicación removeContact
  //-----------------------------
  const removeContact = (phone) => {
    setContacts(contacts.filter((contact) => contact.phone !== phone));
  };
  return (
    <div className="contact-container row flex-wrap m-2">
      {contacts.map((contact, index) => (
        <div
          key={contact.phone}
          className="card contact-card m-1 col-md-12 col-lg-12"
        >
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
          <button
            onClick={() => removeContact(contact.phone)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
