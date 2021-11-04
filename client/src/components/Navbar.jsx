import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-sm bg-dark"
      style={{ width: "100%", padding: " 3px 10px" }}
    >
      <Link to="/" className="navbar-brand">
        <span>Just</span> <span style={{ color: "red" }}>Click</span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        dataToggle="collapse"
        dataTarget="#navbar_collapse"
        ariaControls="navbarNavDropdown"
        ariaExpanded="false"
        ariaLabel="Toggle navigation"
      >
        <span className="text-primary">More</span>
      </button>
      <div className="collapse navbar-collapse" id="navbar_collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/movie" className="nav-link">
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
              Support
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
