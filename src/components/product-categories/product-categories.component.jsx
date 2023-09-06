import ProductItems from "../product-items/product-items.component";
import ProductCategory from "../product-category/product-category.component";
import { ProductContext } from "../../context/products.context";
import { useContext } from "react";

import "./product-categories.styles.scss";

const ProductCategories = () => {
  const { categoriesMap } = useContext(ProductContext);
  return (
    <div>
      {Object.keys(categoriesMap).map((categoryKey) => {
        return (
          <ProductCategory
            key={categoryKey}
            category={categoriesMap[categoryKey]}
            title={categoryKey}
          />
        );
      })}
    </div>
  );
};

export default ProductCategories;
