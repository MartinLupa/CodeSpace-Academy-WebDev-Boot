import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import ContactCard from './components/ContactCard';
import contactsData from '../src/data/contacts';

//CHECK FORMIK https://formik.org/

function App() {
  const [contacts, setContacts] = useState(contactsData);

  const handleDeleteBtn = (e) => {
    setContacts((contacts) => contacts.splice(e.target.id, 1));
  };

  //console.log(contacts[0]);
  return (
    <>
      <Form setContacts={setContacts} />

      {/* Mapping through contacts data */}
      {contacts.map((contact, index) => (
        <div key={index} className="contacts-display container card p-3 m-3">
          <h4>Contact {index + 1}</h4>
          <hr />
          <ContactCard
            className="contact__card"
            name={contact.name}
            lastnames={contact.lastnames}
            address={contact.address}
            city={contact.city}
            postalCode={contact.postalCode}
            phone={contact.phone}
          />
          <button
            id={index}
            onClick={handleDeleteBtn}
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      ))}
    </>
  );
}

export default App;
