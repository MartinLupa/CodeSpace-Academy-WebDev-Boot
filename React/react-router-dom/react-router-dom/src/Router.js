//----------------------------------
//React N° 7 - 00:45:00 Aproximately
//----------------------------------

import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Index from './pages/Index';
import Dashboard from './pages/Dashboard';
import Record from './pages/Record';
import Error from './pages/Error';

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <nav className="navbar">
          <NavLink to="/">Index</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/record/Martin">Record</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/record/:user" element={<Record />} />

          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <footer className="footer">Martin Lupa - Bootcamp 2021</footer>
    </div>
  );
}
