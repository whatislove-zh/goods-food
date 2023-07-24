import { Link } from "react-router-dom";
import notFound404 from "../assets/404-error.svg";

const NotFound = () => {
  return (
    <section className="not-found-section">
      <img src={notFound404} alt="Error 404" className="not-found-img" />
      <h2 className="not-found-title">Oops, This Page Could Not Be Found.</h2>
      <p className="not-found-text">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link to="/" className="not-found-return">
        Return to GoodFoods
      </Link>
    </section>
  );
};
export default NotFound;
