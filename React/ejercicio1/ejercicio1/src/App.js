<<<<<<< HEAD
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
=======
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <Card
        url="https://storage.googleapis.com/argon18craft/products/2021/Electron-Pro-Pursuit/frameset-pursuit-side-02.jpg"
        title="Electron Pro TKO Pursuit"
        cardText="With revolutionary aerodynamics, massive stiffness, and precision positioning through a remodeled cockpit, the Electron Pro TKO Pursuit delivers knockout power to the track’s strongest riders."
        btnHref="https://www.argon18.com/en/bikes/track"
        btnText="ADD TO CART"
      />
>>>>>>> 44d0fe80134f2e8ceeb3ea441320a31ce6c5e438
    </div>
  );
}

export default App;
