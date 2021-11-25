import Lista from './Lista';

export default function Tienda() {
  const tienda = {
    electronics: [
      {
        id: 27,
        product: 'TV',
        brand: 'LG',
        model: 'XP7302',
        price: 399,
      },
      {
        id: 28,
        product: 'Hi-Fi Speakers',
        brand: 'Samsung',
        model: 'VF235',
        price: 179,
      },
      {
        id: 29,
        product: 'TV',
        brand: 'Sony',
        model: 'Bravia-173',
        price: 498,
      },
    ],
    groceries: [
      {
        id: 30,
        product: 'Cookies',
        brand: 'Maria',
        price: 0.9,
      },
      {
        id: 31,
        product: 'Salad',
        brand: 'Imizurra',
        price: 1.3,
      },
      {
        id: 32,
        product: 'Potatoes',
        brand: 'McKain',
        price: 0.8,
      },
      {
        id: 33,
        product: 'Pasta',
        brand: 'Tutti',
        price: 1.1,
      },
    ],
    pets: [
      {
        id: 34,
        product: 'Cat canned food',
        brand: 'Purina',
        price: 4.9,
      },
      {
        id: 35,
        product: 'Cat sand soil',
        brand: 'Limpior',
        price: 1.1,
      },
    ],
  };

  return (
    <div>
      <Lista category={tienda.electronics[0].id} />
      <Lista category={tienda.groceries[0].id} />
      <Lista category={tienda.pets[0].id} />
    </div>
  );
}
