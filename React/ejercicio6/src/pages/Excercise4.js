import Input from '../components/Input';
import ToDos from '../components/ToDos';
import './Excercise4.css';

export default function Excercise4() {
  return (
    <div className="main-container-4">
      <h1>Todo List</h1>

      <Input />
      <ToDos />
    </div>
  );
}
