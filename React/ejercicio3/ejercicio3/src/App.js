import { useState } from 'react';
import './App.css';
import NewContactForm from './components/NewContactForm';
import ContactList from './components/ContactList';
import contactsData from '../src/data/contacts';

//CHECK FORMIK https://formik.org/

function App() {
  const [contacts, setContacts] = useState(contactsData);

  // const handleDeleteBtn = (e) => {
  //   setContacts((contacts) => contacts.splice(e.target.id, 1));
  // };

  //console.log(contacts[0]);
  return (
    <div className="main-container">
      <NewContactForm setContacts={setContacts} />
      {/* Mapping through contacts data */}
      <ContactList
        className="contact__card"
        setContacts={setContacts}
        contacts={contacts}
      />
    </div>
  );
}

export default App;
