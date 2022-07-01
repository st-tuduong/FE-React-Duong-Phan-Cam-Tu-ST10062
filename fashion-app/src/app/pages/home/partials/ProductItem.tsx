import Link from "../../../shared/components/partials/Link";
import { IProduct } from "../../../shared/interfaces/product";

const ProductItem = ({ name, price, img, discount }: IProduct) => {
  return (
    <li className="product-item product-sale col-3 col-sm-6">
      <div className="product-img">
        {discount !== 0 && (
          <span className="badge badge-danger product-badge">{`-${discount}%`}</span>
        )}
        <img src={img} alt="T-Shirt Summer Vibes" />
        <div className="product-overlay">
          <Link text="ADD TO CART" type="primary" />
        </div>
      </div>
      <h4>{name}</h4>
      <div className="item-price">
        {discount ? (
          <>
            <span className="item-sale-price">
              {(price - (price * discount) / 100).toFixed(2)}
            </span>
            <span className="item-old-price">${price}</span>
          </>
        ) : (
          <span className="item-current-price">${price}</span>
        )}
      </div>
    </li>
  );
};

export default ProductItem;
