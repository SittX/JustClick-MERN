import { Link } from "react-router-dom";
import {
  Navigation,
  Button,
  More,
  Nav,
  NavItems,
} from "./styles/Navbar.styled";
const Navbar = () => {
  return (
    <Navigation className="navbar navbar-expand-sm bg-dark">
      <Link to="/" className="navbar-brand">
        <span className="text-primary">Just</span>
        <span className="text-danger">Click</span>
      </Link>
      <Button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar_collapse"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="text-primary">More</span>
      </Button>
      <More className="collapse navbar-collapse" id="navbar_collapse">
        <Nav className="navbar-nav">
          <NavItems>
            <Link to="/movies" className="nav-link">
              Movie
            </Link>
          </NavItems>
          <NavItems>
            <Link to="/anime" className="nav-link">
              Anime
            </Link>
          </NavItems>
          <NavItems>
            <Link to="/support" className="nav-link">
              About us
            </Link>
          </NavItems>
          <NavItems>
            <Link to="/votes" className="nav-link">
              Movies Chart
            </Link>
          </NavItems>
          <NavItems>
            <Link to="/favourite" className="nav-link">
              Favourite
            </Link>
          </NavItems>
        </Nav>
      </More>
    </Navigation>
  );
};

export default Navbar;
