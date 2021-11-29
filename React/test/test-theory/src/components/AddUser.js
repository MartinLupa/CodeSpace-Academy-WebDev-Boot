import { useState } from "react";
export default function AddUser({ onAddUser }) {
  const [user, setUser] = useState({
    userName: "",
    lastName: "",
  });

  const handleNameChange = (e) => {
    setUser({ userName: e.target.value, lastName: user.lastName });
  };
  const handleLastNameChange = (e) => {
    setUser({ userName: user.userName, lastName: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //Falta recibir funcion que nos permita añadir usuarios
    onAddUser((userList) => [...userList, user]);
    setUser({ userName: "", lastName: "" });
  };

  return (
    <form onSubmit={handleSubmit} action="">
      <label htmlFor="">First name</label>
      <input type="text" onChange={handleNameChange} value={user.userName} />
      <label htmlFor="">Last name</label>
      <input
        type="text"
        onChange={handleLastNameChange}
        value={user.lastName}
      />
      <button>Add User</button>
    </form>
  );
}
