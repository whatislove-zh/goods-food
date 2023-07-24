import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li className="nav-list-item">
          <Link to="/products">Products</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/good-eats">Good Eats</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/about">About</Link>
        </li>
        <li className="nav-list-item">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
