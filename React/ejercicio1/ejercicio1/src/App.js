import "./App.css";
import Card from "./components/Card";
import data from "./data/data";

const products = data;
function App() {
  return (
    <div className="App">
      {products.map((product) => {
        return (
          <Card
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
