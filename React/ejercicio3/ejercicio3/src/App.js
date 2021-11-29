import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Planner from "./components/Planner";
import contactsData from "../src/data/contacts";

//CHECK FORMIK https://formik.org/

function App() {
  const [contacts, setUserList] = useState(contactsData);

  return (
    <>
      <Form />
      {contacts.map((contact, index) => (
        <div className="container card p-3 m-3">
          <h2>Contact {index}</h2>
          <Planner
            name={contact.name}
            lastnames={contact.lastnames}
            address={contact.address}
            city={contact.city}
            postalCode={contact.postalCode}
            phone={contact.phone}
          />
        </div>
      ))}
    </>
  );
}

export default App;
