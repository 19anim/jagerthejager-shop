import { useState } from "react";
import { Link } from "react-router-dom";
import "./product-item.styles.scss";
import ProductItemMedia from "../product-item-media/product-item-media";
import ProductItemInformation from "../product-item-information/product-item-information";

const ProductItem = ({ item }) => {
  const { name, imageUrl, price, quantity, vol, alcoholContent, type } = item;
  
  return (
    <div className="product-item">
      <ProductItemMedia imageUrl={imageUrl} name={name} />
      <ProductItemInformation
        information={{ name, vol, alcoholContent, price }}
      />
    </div>
  );
};

export default ProductItem;
