import ProductItem from "../product-item/product-item.component";
import "./product-items.styles.scss";

const ProductItems = ({ items }) => {
  return (
    <div className="product-items-container">
      {items.map((item) => {
        return <ProductItem key={item.id} item={item} />;
      })}
    </div>
  );
};

export default ProductItems;
