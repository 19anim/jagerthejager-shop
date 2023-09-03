import ContactItems from "../contact-items/contact-items.component";
import { Link } from "react-router-dom";
import "./home-introduction-left-side.styles.scss";

const HomeIntroductionLeftSide = () => {
  return (
    <div className="home-introduction-left-side">
      <h1>Cám ơn bạn đã ghé đến "Ở đây iem bán thuốc ho con hươu" shop</h1>
      <p>Để shop giới thiệu mọi người các kênh để liên hệ shop nheee</p>
      <ContactItems />
      <Link className="home-product-navigator">
        <div className="home-product-navigator--icon"></div>
        <span className="home-product-navigator--text">Shopping thôiiii ➔</span>
      </Link>
    </div>
  );
};

export default HomeIntroductionLeftSide;
