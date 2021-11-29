import List from './List';
import data from '../data/data';

const shop = data;

export default function Shop() {
  return (
    <div>
      <List category="Electronics" products={shop['electronics']} />
      <List category="Groceries" products={shop['groceries']} />
      <List category="Pets" products={shop['pets']} />
    </div>
  );
}
