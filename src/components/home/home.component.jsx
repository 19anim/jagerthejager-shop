import "./home.styles.scss";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import HomeIntroductionLeftSide from "../home-introduction-left-side/home-introduction-left-side.component";
import HomeIntroductionRightSide from "../home-introduction-right-side/home-introduction-right-side.components";
import Navigation from "../../routes/navigation/navigation.component";

const Home = () => {
  return (
    <div className="home-container">
      <HomeIntroductionLeftSide />
      <HomeIntroductionRightSide />
    </div>
  );
};

export default Home;
