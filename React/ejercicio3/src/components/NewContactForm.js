import { useState } from 'react';
import './NewContactForm.css';
//import { useFormik } from 'formik';

export default function NewContactForm({ setContacts }) {
  // ----------------------------- OPTION 1 -----------------------------
  // const [name, setName] = useState('');
  // const [lastnames, setLastnames] = useState('');
  // const [address, setAddress] = useState('');
  // const [city, setCity] = useState('');
  // const [postalCode, setPostalCode] = useState(0);
  // const [phone, setPhone] = useState('');

  // const handleNameChange = (e) => {
  //   setName(e.target.value);
  // };
  // const handleLastNamesChange = (e) => {
  //   setLastnames(e.target.value);
  // };
  // const handleAddressChange = (e) => {
  //   setAddress(e.target.value);
  // };
  // const handleCityChange = (e) => {
  //   setCity(e.target.value);
  // };
  // const handlePCChange = (e) => {
  //   setPostalCode(e.target.value);
  // };
  // const handlePhoneChange = (e) => {
  //   setPhone(e.target.value);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const newContact = { name, lastnames, address, city, postalCode, phone };
  //   setContacts((currentContacts) => [...currentContacts, newContact]);

  //   setName("")
  //   setLastnames("")
  //   setAddress("")
  //   setCity("")
  //   setPostalCode("")
  //   setPhone("")
  // };

  // ----------------------------- OPTION 2 -----------------------------
  const initialState = {
    name: '',
    lastnames: '',
    address: '',
    city: '',
    postalCode: '',
    phone: '',
  };
  const [form, setForm] = useState(initialState);

  //-----------------------------
  //Clase React N° 4 hora 3:00:00 - Explicación handleInput
  //-----------------------------
  const handleInput = (e) => {
    //console.log(e.target.name);
    const inputName = e.target.id;
    const newValue = e.target.value;
    setForm({ ...form, ...{ [inputName]: newValue } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts((currentContacts) => [...currentContacts, form]);
    setForm(initialState);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="contact-form card container d-flex flex-column p-3 m-3"
      action=""
    >
      <h2>Add contact</h2>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" onChange={handleInput} />
      <label htmlFor="lastnames">Lastnames</label>
      <input type="text" id="lastnames" onChange={handleInput} />
      <label htmlFor="address">Address</label>
      <input type="text" id="address" onChange={handleInput} />
      <label htmlFor="city">City</label>
      <input type="text" id="city" name="city" onChange={handleInput} />
      <label htmlFor="postalCode">Postal Code</label>
      <input type="number" id="postalCode" onChange={handleInput} />
      <label htmlFor="phone">Phone</label>
      <input type="number" id="phone" onChange={handleInput} />
      <button className="btn btn-success mt-3">Add contact</button>
    </form>
  );
}

// ----------------------------- OPTION 3 - FORMIK -----------------------------
// This option includes basic validation

// const initialValues = {
//   name: '',
//   lastnames: '',
//   address: '',
//   city: '',
//   postalCode: '',
//   phone: '',
// };

// export default function Form({ setContacts }) {
//   // Formik hook

//   const onSubmit = (values) => {
//     setContacts((contacts) => [...contacts, values]);
//   };

//   const formik = useFormik({
//     initialValues,
//     onSubmit,
//   });
//   return (
//     <form
//       onSubmit={formik.handleSubmit}
//       className="contact-form card d-flex flex-column p-3 mb-3 mt-3  "
//       action=""
//     >
//       <h2>Add contact</h2>
//       <label htmlFor="">Name</label>
//       <input
//         id="name"
//         type="text"
//         placeholder="Introduce your name"
//         onChange={formik.handleChange}
//         value={formik.values.name}
//       />

//       <label htmlFor="">Lastnames</label>
//       <input
//         id="lastnames"
//         type="text"
//         placeholder="Introduce your lastnames"
//         onChange={formik.handleChange}
//         value={formik.values.lastnames}
//       />

//       <label htmlFor="">Address</label>
//       <input
//         id="address"
//         type="text"
//         placeholder="Introduce your address"
//         onChange={formik.handleChange}
//         value={formik.values.address}
//       />

//       <label htmlFor="">City</label>
//       <input
//         id="city"
//         type="text"
//         placeholder="Introduce your city"
//         onChange={formik.handleChange}
//         value={formik.values.city}
//       />

//       <label htmlFor="">Postal Code</label>
//       <input
//         id="postalCode"
//         type="number"
//         placeholder="Introduce your Postal Code"
//         onChange={formik.handleChange}
//         value={formik.values.postalCode}
//       />

//       <label htmlFor="">Phone</label>
//       <input
//         id="phone"
//         type="number"
//         placeholder="Introduce your phone"
//         onChange={formik.handleChange}
//         value={formik.values.phone}
//       />

//       <button className="btn btn-success mt-3" type="submit">
//         Add contact
//       </button>
//     </form>
//   );
// }
