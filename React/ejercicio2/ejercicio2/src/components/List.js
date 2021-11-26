<<<<<<< HEAD
import PropTypes from "prop-types";

export default function List({ category, products }) {
  return (
    <div>
      <h2>{category}</h2>
      <ul>
        {products.map(({ id, product, brand, price }) => {
          return (
            <li>
              <p key={id}>{`${product} - ${brand} - $${price}`}</p>
            </li>
          );
        })}
=======
export default function List(props) {
  return (
    <div>
      <ul>
        <li>
          {props.product} - {props.brand} - ${props.price}
        </li>
>>>>>>> 44d0fe80134f2e8ceeb3ea441320a31ce6c5e438
      </ul>
    </div>
  );
}
<<<<<<< HEAD

List.propTypes = {
  category: PropTypes.string.isRequired,
  products: PropTypes.array,
};
=======
>>>>>>> 44d0fe80134f2e8ceeb3ea441320a31ce6c5e438
