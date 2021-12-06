import { useContext } from 'react';
import { GlobalContext } from '../App';
//Custom hook

export default function ToDos() {
  const { todos, setTodos } = useContext(GlobalContext);

  const handleDelete = (title) => {
    setTodos(todos.filter((item) => item.title !== title));
  };

  //-----------------------------------
  //React N° 5 - Hora 02:18:00 - Toggle function explanation
  //-----------------------------------
  const handleToggle = (e, index) => {
    if (e.target.tagName !== 'BUTTON') {
      const newTodos = [...todos];
      newTodos[index].completed = !newTodos[index].completed;
      setTodos(newTodos);
    }
  };

  //Custom hook

  // useEffect(() => {
  //   fetch(API_TODOS)
  //     .then((response) => response.json())
  //     .then((data) => setTodos(data.slice(0, 5)));
  // }, []);

  return (
    <>
      <ul className="list-group ">
        {todos.map(({ title, completed }, index) => {
          return (
            <li
              className={`${completed ? 'toggle' : ''}`}
              onClick={(e) => handleToggle(e, index)}
              key={title}
            >
              <p>
                {index} - {title}
              </p>
              <button
                onClick={() => handleDelete(title)}
                className="btn btn-danger delete-todo-btn"
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
