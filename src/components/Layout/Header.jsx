import logo from "../../assets/logo_transparent.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearchHeart } from "react-icons/bs";
import { HiMenuAlt1 } from "react-icons/hi";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <div className="logo-container">
            <a href="/">
              <img
                className="logo"
                src={logo}
                alt="logo"
                width="150px"
                height="60px"
              />
            </a>
          </div>
          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-list-item">
                <a href="/products">Products</a>
              </li>
              <li className="nav-list-item">
                <a href="/good-eats">Good Eats</a>
              </li>
              <li className="nav-list-item">
                <a href="/about">About</a>
              </li>
              <li className="nav-list-item">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </nav>
          <div className="header-buttons">
            <button className="shopping-cart svg-btn">
              <AiOutlineShoppingCart />
            </button>
            <button className="search svg-btn">
              <BsSearchHeart />
            </button>
            <button className="shop-now orange-btn">Shop Now</button>
          </div>
          <button className="burger-menu svg-btn">
            <HiMenuAlt1 />
          </button>
        </div>
      </div>
    </header>
  );
}
