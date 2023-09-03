import "./home.styles.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="navigation">
        <div className="shop-logo-title">
          <Link className="logo-container">
            <Logo />
          </Link>
          <span className="shop-title">JAGERTHEJAGER SHOP</span>
        </div>
        <div className="nav-links-container">
          <Link>About</Link>
          <Link>Products</Link>
          <Link>Cart Icon</Link>
          <Link>Recipe</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
