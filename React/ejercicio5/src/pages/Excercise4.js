import Input from '../components/Input';
import ToDos from '../components/ToDos';
import './Excercise4.css';
import { useState, createContext } from 'react';

export const GlobalContext = createContext();

export default function Excercise4() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="main-container-4">
      <h1>Todo List</h1>
      <GlobalContext.Provider value={{ todos, setTodos }}>
        <Input />
        <ToDos />
      </GlobalContext.Provider>
    </div>
  );
}
