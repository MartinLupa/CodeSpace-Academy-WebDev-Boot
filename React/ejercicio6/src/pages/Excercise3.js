import './Excercise3.css';
import NewContactForm from '../components/NewContactForm';
import ContactList from '../components/ContactList';

//CHECK FORMIK https://formik.org/

export default function Excercise3() {
  return (
    <div className="main-container-3">
      <NewContactForm />

      <ContactList className="contact-card" />
    </div>
  );
}
