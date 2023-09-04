import { Routes, Route } from "react-router-dom";
import Home from "./components/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import ProductPage from "./routes/products-page/products-page.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
      </Route>
    </Routes>
  );
};

export default App;
