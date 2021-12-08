import '../styles/Navbar.css';
// import { useContext } from 'react';
// import { GlobalContext } from '../App';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  // const { movies, setMovies } = useContext(GlobalContext);

  //Option for future improvements: setting a filter on Main page.
  // const handleMovieFilter = (e) => {
  //   const filteredMovies = movies.filter(
  //     (movie) => movie.title.indexOf(e.target.value) !== -1
  //   );
  //   setMovies(filteredMovies);
  // };

  return (
    <nav className="navbar sticky-top navbar-static-top navbar-expand-lg navbar-dark">
      <h2 className="logo-text">Movies World</h2>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll">
          <li className="nav-item">
            <NavLink className="nav-link active" aria-current="true" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link active"
              aria-current="true"
              to="/search"
            >
              Search
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link active"
              aria-current="true"
              to="/watchlist"
            >
              Your List
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link active"
              aria-current="true"
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

{
  /* <nav className="navbar navbar-expand-lg ">
      <div className="container-fluid">
        <h2>Movies World</h2>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expand="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-nav-scroll">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="true" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="true"
                to="/search"
              >
                Search
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="true"
                to="/watchlist"
              >
                Your List
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="true"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav> */
}
