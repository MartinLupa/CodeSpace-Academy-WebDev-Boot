import { useState } from 'react';

export default function Form({ setContacts }) {
  const [newContact, setNewContact] = useState({
    name: '',
    lastnames: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
  });

  const handleNameChange = (e) => {
    setNewContact({
      name: e.target.value,
      lastnames: newContact.lastnames,
      address: newContact.address,
      city: newContact.city,
      postalCode: newContact.postalCode,
      phone: newContact.phone,
    });
  };
  const handleLastNamesChange = (e) => {
    setNewContact({
      name: newContact.name,
      lastnames: e.target.value,
      address: newContact.address,
      city: newContact.city,
      postalCode: newContact.postalCode,
      phone: newContact.phone,
    });
  };
  const handleAddressChange = (e) => {
    setNewContact({
      name: newContact.name,
      lastnames: newContact.lastnames,
      address: e.target.value,
      city: newContact.city,
      postalCode: newContact.postalCode,
      phone: newContact.phone,
    });
  };
  const handleCityChange = (e) => {
    setNewContact({
      name: newContact.name,
      lastnames: newContact.lastnames,
      address: newContact.address,
      city: e.target.value,
      postalCode: newContact.postalCode,
      phone: newContact.phone,
    });
  };
  const handlePCChange = (e) => {
    setNewContact({
      name: newContact.name,
      lastnames: newContact.lastnames,
      address: newContact.address,
      city: newContact.city,
      postalCode: e.target.value,
      phone: newContact.phone,
    });
  };
  const handlePhoneChange = (e) => {
    setNewContact({
      name: newContact.name,
      lastnames: newContact.lastnames,
      address: newContact.address,
      city: newContact.city,
      postalCode: newContact.postalCode,
      phone: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts((contacts) => [...contacts, newContact]);
    setNewContact({
      name: '',
      lastnames: '',
      address: '',
      city: '',
      postalCode: '',
      phone: '',
    });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form card container d-flex flex-column p-3 m-3"
      action=""
    >
      <h2>Add contact</h2>
      <label htmlFor="">Name</label>
      <input type="text" onChange={handleNameChange} value={newContact.name} />

      <label htmlFor="">Lastnames</label>
      <input
        type="text"
        onChange={handleLastNamesChange}
        value={newContact.lastnames}
      />

      <label htmlFor="">Address</label>
      <input
        type="text"
        onChange={handleAddressChange}
        value={newContact.address}
      />

      <label htmlFor="">City</label>
      <input type="text" onChange={handleCityChange} value={newContact.city} />

      <label htmlFor="">Postal Code</label>
      <input
        type="number"
        onChange={handlePCChange}
        value={newContact.postalCode}
      />

      <label htmlFor="">Phone</label>
      <input
        type="number"
        onChange={handlePhoneChange}
        value={newContact.phone}
      />

      <button className="btn btn-success mt-3">Add contact</button>
    </form>
  );
}
