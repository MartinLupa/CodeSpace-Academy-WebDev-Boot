import { useState, useEffect } from 'react';
import Input from './components/Input';

export default function ToDos() {
  const [todos, setTodos] = useState([]);

  const handleDelete = (e) => {
    console.log(e.target.id);
    const newTodoList = todos.filter((item) => item.id !== e.target.id);
    setTodos(newTodoList);
  };

  useEffect(() => {
    async function apiRequest() {
      const request = fetch('https://jsonplaceholder.typicode.com/todos');
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
        {todos.map((todo, index) => (
          <li key={todo.id}>
            <p>
              {index} - {todo.title}
            </p>
            <button
              id={todo.id}
              onClick={handleDelete}
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
