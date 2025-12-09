import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="nav-wrapper">
      <div className="nav-brand">Elijah Tech</div>

      <input id="menuToggle" type="checkbox" />
      <label htmlFor="menuToggle" className="menu-icon">☰</label>

      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/programs">Programs</Link></li>
          <li><Link to="/faculty">Faculty</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
