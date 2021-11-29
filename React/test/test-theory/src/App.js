import { useState } from "react";
import "./App.css";
import ShoppingCart from "./components/ShoppingCart";
import AddUser from "./components/AddUser";

function App() {
  const [userList, setUserList] = useState([]);
  const [cart, setCart] = useState(["Cookies", "Bread", "Cheese"]);
  return (
    <div className="App">
      <h2>Food Cart</h2>
      <ShoppingCart setCart={setCart} />
      <ul>
        {cart.map((element) => (
          <li>{element}</li>
        ))}
      </ul>
      <h2>Add User</h2>
      <AddUser onAddUser={setUserList} />
      <ul>
        {userList.map((user) => (
          <li>
            {user.userName} {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
