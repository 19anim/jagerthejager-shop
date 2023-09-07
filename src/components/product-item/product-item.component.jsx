import { useState } from "react";
import "./product-item.styles.scss";

const ProductItem = ({ item }) => {
  const { DefaultImageUrl, name, details } = item;
  const [priceToDisplay, setPriceToDisplay] = useState("");
  const [imageLink, setImageLink] = useState("");
  const handleVolumeButtonOnClick = (evt) => {
    const index = evt.target.value;
    const combinationPriceAndVolume = details[index].price + " / " + evt.target.innerHTML;
    setPriceToDisplay(combinationPriceAndVolume);
    setImageLink(details[index].imageUrl);
    console.log("Done");
  };
  return (
    <div className="product-item">
      <div className="product-item-media">
        <p className="product-item-title common-title">{name.toUpperCase()}</p>
        {imageLink ? <img src={imageLink} alt={name.toUpperCase()} /> : <img src={DefaultImageUrl} alt={name.toUpperCase()} />}
      </div>
      <div className="product-item-information">
        <div className="product-item-vol">
          <p className="product-item-vol--title common-title">Dung tích:</p>
          {details.map((detail, index) => {
            const { volume, price, quantity } = detail;
            return (
              <button key={name + volume}
                className="product-item-vol--button"
                onClick={handleVolumeButtonOnClick}
                value={index}
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
