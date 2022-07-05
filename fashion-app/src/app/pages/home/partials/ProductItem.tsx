import { useDispatch } from "react-redux";
import Button from "../../../shared/components/partials/Button";
import { IProduct } from "../../../shared/interfaces/product";
import { addCart } from "../../cart/cart.actions";

interface IProductItemProps {
  product: IProduct;
}

const ProductItem = ({ product }: IProductItemProps) => {
  const dispatch = useDispatch();
  const handleAddCart = () => {
    dispatch(addCart(product));
  };

  return (
    <li className="product-item product-sale col-3 col-sm-6">
      <div className="product-img">
        {product.discount !== 0 && (
          <span className="badge badge-danger product-badge">{`-${product.discount}%`}</span>
        )}
        <img src={product.image} alt="T-Shirt Summer Vibes" />
        <div className="product-overlay">
          <Button
            text="ADD TO CART"
            type="primary"
            classButton="btn-addcart"
            onClick={handleAddCart}
          />
        </div>
      </div>
      <h4>{product.name}</h4>
      <div className="item-price">
        {product.discount ? (
          <>
            <span className="item-sale-price">
              {(
                product.price -
                (product.price * product.discount) / 100
              ).toFixed(2)}
            </span>
            <span className="item-old-price">${product.price}</span>
          </>
        ) : (
          <span className="item-current-price">${product.price}</span>
        )}
      </div>
    </li>
  );
};

export default ProductItem;
