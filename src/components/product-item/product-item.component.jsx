import { useState } from "react";
import "./product-item.styles.scss";

const ProductItem = ({ item }) => {
  const { imageUrl, name, details } = item;
  const [priceToDisplay, setPriceToDisplay] = useState("");
  const handleVolumeButtonOnClick = (evt) => {
    const combinationPriceAndVolume = evt.target.value + " / " + evt.target.innerHTML;
    setPriceToDisplay(combinationPriceAndVolume);
  };
  return (
    <div className="product-item">
      <div className="product-item-media">
        <p className="product-item-title common-title">{name.toUpperCase()}</p>
        <img src={imageUrl} alt="" />
      </div>
      <div className="product-item-information">
        <div className="product-item-vol">
          <p className="product-item-vol--title common-title">Dung tích:</p>
          {details.map((detail) => {
            const { volume, price, quantity } = detail;
            return (
              <button key={name + volume}
                className="product-item-vol--button"
                onClick={handleVolumeButtonOnClick}
                value={price}
              >
                {volume}
              </button>
            );
          })}
        </div>
        <div className="product-item-price">
          <p className="product-item-price--title common-title">Giá:</p>
          <p className="product-item-price--value common-title">
            {priceToDisplay}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
