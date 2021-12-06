import { useState } from 'react';
import './Excercise3.css';
import NewContactForm from '../components/NewContactForm';
import ContactList from '../components/ContactList';
import contactsData from '../data/contacts';

//CHECK FORMIK https://formik.org/

export default function Excercise3() {
  const [contacts, setContacts] = useState(contactsData);

  // const handleDeleteBtn = (e) => {
  //   setContacts((contacts) => contacts.splice(e.target.id, 1));
  // };

  //console.log(contacts[0]);
  return (
    <div className="main-container-3">
      <NewContactForm setContacts={setContacts} />

      <ContactList
        className="contact-card"
        setContacts={setContacts}
        contacts={contacts}
      />
    </div>
  );
}
