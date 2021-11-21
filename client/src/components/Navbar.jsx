import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm bg-dark"
      style={{ width: "100%", zIndex: "10000" }}
    >
      <Link to="/" className="navbar-brand">
        <span>Just</span> <span style={{ color: "red" }}>Click</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar_collapse"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="text-primary">More</span>
      </button>
      <div className="collapse navbar-collapse" id="navbar_collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/movies" className="nav-link">
              Movie
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/anime" className="nav-link">
              Anime
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/support" className="nav-link">
              About us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/votes" className="nav-link">
              Movies Chart
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/favourite" className="nav-link">
              Favourite
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
