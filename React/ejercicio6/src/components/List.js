// import PropTypes from 'prop-types';

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
      </ul>
    </div>
  );
}

// List.propTypes = {
//   category: PropTypes.string.isRequired,
//   products: PropTypes.array,
// };
