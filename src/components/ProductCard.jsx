import React from "react";
import "./ProductCard.css";
import "react-loading-skeleton/dist/skeleton.css";

import toast from "react-hot-toast";

const ProductCard = ({
  isOutOfStock,
  name,
  image,
  price,
  id,
  variants,
  selectedVariant,
  onAddToCart,
  onSelectVariantChanged,
}) => {
  const handleVariantChange = (event) => {
    const variantId = event.target.value;
    const variant = variants.find((v) => String(v.id) === variantId);
    onSelectVariantChanged(variant);
  };

  return (
    <>
      <div className="product-card card text-center h-100" key={id}>
        <img className="card-img-top p-3" src={image} alt="Card" height={300} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>

        {variants && variants.length > 0 && (
          <div className="card-body">
            {variants.length === 1 ? (
              <div className="label">{selectedVariant}</div>
            ) : (
              <select
                id={`variant-select-${id}`}
                className="form-select"
                onChange={handleVariantChange}
                value={selectedVariant?.id || ""}
              >
                {variants.map((variant) => (
                  <option key={variant.id} value={variant.id}>
                    {variant.name || variant.title || `Variant ${variant.id}`} -
                    ${variant.price || price}
                  </option>
                ))}
              </select>
            )}
          </div>
        )}

        <div className="price">$ {price}</div>

        <div className="card-body">
          <button
            className="btn btn-dark m-1"
            onClick={() => {
              toast.success("Added to cart");
              onAddToCart();
            }}
          >
            Add to Cart
          </button>
        </div>

        {isOutOfStock && (
          <div className="product-card-out-of-stock">Out of Stock</div>
        )}
      </div>
    </>
  );
};

export default ProductCard;
