export default function Form({ onAddUser }) {
  const [contact, setContact] = useState({ name: "", lastname: "" });
  return (
    <form
      className="contact-form card container d-flex flex-column p-3 m-3"
      action=""
    >
      <h2>Add contact</h2>
      <label htmlFor="">Name</label>
      <input type="text" />

      <label htmlFor="">Lastname</label>
      <input type="text" />

      <label htmlFor="">Address</label>
      <input type="text" />

      <label htmlFor="">City</label>
      <input type="text" />

      <label htmlFor="">Postal Code</label>
      <input type="number" />

      <label htmlFor="">Phone</label>
      <input type="number" />

      <button className="btn btn-success mt-3">Add contact</button>
    </form>
  );
}
