import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navBar">
      <div className="navbar-home">
        <Link to="/">Home Page</Link>
      </div>
      <div className="navbar-links">
        <Link to="/links">Links Page!</Link>
      </div>
      <div className="navbar-about">
        <Link to="/about">The About Section!</Link>
      </div>
      <div className="navbar-contact">
        <Link to="/about">The Contact Section!</Link>
      </div>
      <div>
        <br></br>
        <a href="https://diablo2.io/">
          and a link to external website example!
        </a>
      </div>
    </nav>
  );
}
