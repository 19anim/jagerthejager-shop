import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link, Outlet } from "react-router-dom";

import "./navigation.styles.scss";
import { Fragment } from "react";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <div className="shop-logo-title">
          <Link to="/" className="logo-container">
            <Logo />
          </Link>
          <span className="shop-title">JAGERTHEJAGER SHOP</span>
        </div>
        <div className="nav-links-container">
          <Link to="/test">About</Link>
          <Link to="/products">Products</Link>
          <Link>Cart Icon</Link>
          <Link>Recipe</Link>
          <Link>Sign In</Link>
          <Link>Sign Out</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
