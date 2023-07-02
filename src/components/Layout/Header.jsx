import logo from "../../assets/logo_transparent.png";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearchHeart } from "react-icons/bs";
import { HiMenuAlt1 } from "react-icons/hi";

import Navigation from "./Navigation";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-wrapper">
          <button className="burger-menu svg-btn">
            <HiMenuAlt1 />
          </button>
          <div className="logo-container">
            <Link to="/">
              <img
                className="logo"
                src={logo}
                alt="logo"
                width="120px"
                height="60px"
              />
            </Link>
          </div>
          <Navigation />
          <div className="header-buttons">
            <button className="shopping-cart svg-btn">
              <AiOutlineShoppingCart />
            </button>
            <button className="search svg-btn">
              <BsSearchHeart />
            </button>
            <button className="shop-now orange-btn">Shop Now</button>
          </div>
        </div>
      </div>
    </header>
  );
}
