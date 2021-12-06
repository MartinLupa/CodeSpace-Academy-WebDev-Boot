import './Excercise1.css';
import Card from '../components/Card';
import bikeData from '../data/bikeData';

const products = bikeData;
export default function Excercise1() {
  return (
    <div className="main-container">
      {products.map((product) => {
        return (
          <Card
            key={product.url}
            url={product.url}
            title={product.title}
            cardText={product.cardText}
            infoHref={product.infoHref}
          />
        );
      })}
    </div>
  );
}
