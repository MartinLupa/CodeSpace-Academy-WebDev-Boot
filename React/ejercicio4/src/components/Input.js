import { useContext } from 'react';
import { GlobalContext } from '../App';
import { useState } from 'react';

export default function Input() {
  const { setTodos } = useContext(GlobalContext);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((currentTodos) => [
      ...currentTodos,
      { title: newTodo, completed: false },
    ]);
    setNewTodo('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="input-container">
        <input
          onChange={handleInputChange}
          value={newTodo}
          placeholder="Introduce a new todo"
          type="text"
        />
        <button className="btn btn-success">Add Todo</button>
      </form>
    </>
  );
}
