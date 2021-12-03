import { useState, useEffect } from "react";
import Input from "./components/Input";

export default function ToDos() {
  const [todos, setTodos] = useState([]);

  const handleDelete = (e, id) => {
    console.log(e.target.id);
    setTodos(todos.filter((item) => item.id !== id));
  };

  const handleToggle = (e, index) => {
    // console.log(e.target.tagName);
    if (e.target.tagName !== "BUTTON") {
      const newTodos = [...todos];
      newTodos[index].complete = !newTodos[index].complete;
      setTodos(newTodos);
    }
  };

  useEffect(() => {
    async function apiRequest() {
      const request = fetch("https://jsonplaceholder.typicode.com/todos");
      const response = await request;
      const data = await response.json();
      const resumedData = data.splice(0, 5);
      setTodos(resumedData);
      console.log(resumedData);
    }
    apiRequest();
  }, []);
  return (
    <>
      <h1>Todo List</h1>
      <Input setTodos={setTodos} />
      <ul className="list-group ">
        {todos.map(({ id, title, complete }, index) => (
          <li onClick={(e) => handleToggle(e, index)} key={id}>
            <p className={`${complete ? "toggle" : ""}`}>
              {index} - {title}
            </p>
            <button
              onClick={(e) => handleDelete(e, id)}
              className="btn btn-danger"
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
