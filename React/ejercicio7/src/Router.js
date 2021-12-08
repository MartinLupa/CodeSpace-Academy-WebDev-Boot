import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Details from './pages/Details';
import WatchList from './pages/WatchList';
import Search from './pages/Search';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Error from './pages/Error';

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/search/details/:id" element={<Details />} />
          <Route path="/watchlist/details/:id" element={<Details />} />

          <Route path="/watchlist" element={<WatchList />} />
          <Route path="/search" element={<Search />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
