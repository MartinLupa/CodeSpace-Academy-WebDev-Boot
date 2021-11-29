import { useState } from "react";

export default function ShoppingCart({ setCart }) {
  const [element, setElement] = useState();
  const handleChange = (e) => {
    setElement(e.target.value);
  };

  const handleSubmit = (e) => {
    setCart((cart) => [...cart, element]);
    e.PreventDefault();
  };
  return (
    <form onSubmit={handleSubmit} action="">
      <input
        type="text"
        value={element}
        placeholder="Add food"
        onChange={handleChange}
      />
      <button>Add food</button>
    </form>
  );
}
