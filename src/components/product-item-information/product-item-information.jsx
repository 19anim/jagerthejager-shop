import "./product-item-information.scss";

const ProductItemInformation = ({ information }) => {
  const { name, vol, alcoholContent, price } = information;
  const quantityOptions = [];

  const setQuantityOptions = () => {
    for (let i = 1; i <= 10; i++) {
      quantityOptions.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
  };
  setQuantityOptions();
  return (
    <div className="product-item-information">
      <p className="product-item-title common-title">{name.toUpperCase()}</p>
      <div className="product-item-information-summary">
        <p className="product-item-information--vol common-title">
          Dung tích: {vol}{" "}
        </p>
        <span className="product-item-information--splitter"> | </span>
        <p className="product-item-information--alcoholContent common-title">
          Độ cồn: {alcoholContent}
        </p>
      </div>
      <div className="product-item-price">
        <p className="product-item-price--title common-title">Giá: {price}</p>
      </div>
      <div className="product-item-add-to-cart">
        <select className="product-quantity" id="product-quantity">
          {quantityOptions}
        </select>
        <button className="product-item-add-to-cart--button">
          Thêm vào giỏ hàng
        </button>
      </div>
      <button className="product-item-detail--button">Chi tiết sản phẩm</button>
    </div>
  );
};

export default ProductItemInformation;
