import ProductItems from "../product-items/product-items.component";
import { ProductContext } from "../../context/products.context";
import { useContext } from "react";

import "./product-category.styles.scss";

const ProductCategory = ({title, category}) => {
  return (
    <div className="product-category">
      <h2 className="product-category-title">{title.toUpperCase()}</h2>
      <ProductItems items={category} />
    </div>
  );
};

export default ProductCategory;
