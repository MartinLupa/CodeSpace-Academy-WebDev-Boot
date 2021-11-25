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
    </div>
  );
}

export default App;
