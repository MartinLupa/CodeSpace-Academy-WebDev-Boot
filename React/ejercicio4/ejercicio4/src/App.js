import Input from './components/Input';
import ToDos from './components/ToDos';
import { useState, createContext } from 'react';

export const GlobalContext = createContext();

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1>Todo List</h1>
      <GlobalContext.Provider value={{ todos, setTodos }}>
        <Input />
        <ToDos />
      </GlobalContext.Provider>
    </>
  );
}
