import Router from './Router';
import './App.css';
import contactsData from './data/contacts';
import { createContext } from 'react';
import { useState } from 'react';
import { useFetch } from './hooks/useFetch';

//Use of a GlobalContext for excercises 3 and 4.
export const GlobalContext = createContext({});

function App() {
  //Excercise 3 states
  const [contacts, setContacts] = useState(contactsData);
  //Excercise 4 states, included the useFetch
  const [todos, setTodos] = useState([]);
  const API_TODOS = 'https://jsonplaceholder.typicode.com/todos';
  useFetch(API_TODOS, setTodos, 5);
  return (
    <div>
      <GlobalContext.Provider
        value={{ contacts, setContacts, todos, setTodos }}
      >
        <Router />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
