import Navigation from "./Navigation";

import certified from "../../assets/High-Pressure-Certified-Logo.png";
import familyLogo from "../../assets/family-owned-business-logo.png";

import {
  BsTiktok,
  BsInstagram,
  BsTwitter,
  BsFacebook,
  BsPinterest,
} from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="socials">
            <a
              className="svg-btn socials-btn"
              href="https://www.pinterest.com/ilovegoodfoods/"
            >
              <BsPinterest />
            </a>

            <a
              href="https://www.instagram.com/goodfoods/"
              className="svg-btn socials-btn"
            >
              <BsInstagram />
            </a>
            <a
              href="https://twitter.com/Goodfood_CA"
              className="svg-btn socials-btn"
            >
              <BsTwitter />
            </a>
            <a
              href="https://www.tiktok.com/@goodfoodsgroup"
              className="svg-btn socials-btn"
            >
              <BsTiktok />
            </a>
            <a
              href="https://www.facebook.com/GoodFoodsGroup"
              className="svg-btn socials-btn"
            >
              <BsFacebook />
            </a>
          </div>
          <Navigation />
          
          <div className="logo-container">
            <a href="/">
              <img
                className="logo"
                src={certified}
                alt="logo"
                height="80px"
                width="80px"
              />
            </a>
            <a href="/">
              <img
                className="logo family-logo"
                src={familyLogo}
                alt="logo"
                height="80px"
                width="110px"
              />
            </a>
          </div>
          <p className="copyright">© 2021 Good Foods Group</p>
        </div>
      </div>
    </footer>
  );
}
