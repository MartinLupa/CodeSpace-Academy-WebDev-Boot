import { useState } from "react";

export default function Input({ setTodos }) {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((todo) => [
      ...todo,
      { userId: 1, id: 1, title: newTodo, completed: false },
    ]);
    setNewTodo("");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="input-container">
        <input onChange={handleInputChange} value={newTodo} type="text" />
        <button className="btn btn-success">Add Todo</button>
      </form>
    </>
  );
}
