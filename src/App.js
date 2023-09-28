import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import ProductPage from "./routes/products-page/products-page.component";

const Test = () => {
  return <div className="test-container">
    <div className="test-img">
      <img src="https://i.ibb.co/j3hhSzc/original1000ml.png" alt="" />
    </div>
    <div className="test-content"></div>
  </div>
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/test" element={<Test/>}/>
      </Route>
    </Routes>
  );
};

export default App;
