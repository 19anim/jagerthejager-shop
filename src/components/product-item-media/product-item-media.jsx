import "./product-item-media.scss";

const ProductItemMedia = ({ imageUrl, name }) => {
  return (
    <div className="product-item-media">
      <img loading="lazy" src={imageUrl} alt={name.toUpperCase()} />
    </div>
  );
};

export default ProductItemMedia;
