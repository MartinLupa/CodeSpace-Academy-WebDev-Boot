import './App.css';
import Card from './components/Card';
import data from './data/data';

const products = data;
function App() {
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

export default App;
