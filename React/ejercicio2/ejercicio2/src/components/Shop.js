import List from './List';

export default function Shop() {
  //state = {};
  const shop = {
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
      <List
        category={Object.keys(shop)[0]}
        product={shop.groceries[0].product}
        brand={shop.groceries[0].brand}
        price={shop.groceries[0].price}
      />
      <List
        category={Object.keys(shop)[1]}
        product={shop.groceries[0].product}
        brand={shop.groceries[0].brand}
        price={shop.groceries[0].price}
      />
      <List
        category={Object.keys(shop)[2]}
        product={shop.pets[0].product}
        brand={shop.pets[0].brand}
        price={shop.pets[0].price}
      />

      {/* {Object.keys(shop).map((category, i) => {
        return (
          <List
            category={category}
            product={[i].product}
            brand={[i].brand}
            price={[i].price}
          />
        );
      })} */}
    </div>
  );
}
