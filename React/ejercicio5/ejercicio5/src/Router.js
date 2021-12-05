import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Excercise1 from './pages/Excercise1';
import Excercise2 from './pages/Excercise2';
import Excercise3 from './pages/Excercise3';
import Excercise4 from './pages/Excercise4';
import Error from './pages/Error';

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <NavLink to="/excercise1">Excercise 1</NavLink>
          <NavLink to="/excercise2">Excercise 2</NavLink>
          <NavLink to="/excercise3">Excercise 3</NavLink>
          <NavLink to="/excercise4">Excercise 4</NavLink>
        </nav>
        <Routes>
          <Route path="/excercise1" element={<Excercise1 />} />
          <Route path="/excercise2" element={<Excercise2 />} />
          <Route path="/excercise3" element={<Excercise3 />} />
          <Route path="/excercise4" element={<Excercise4 />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
