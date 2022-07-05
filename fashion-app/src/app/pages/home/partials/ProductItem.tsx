import { useDispatch } from "react-redux";
import Button from "../../../shared/components/partials/Button";
import { IProduct } from "../../../shared/interfaces/product";
import { addCart } from "../home.actions";

interface IProductItemProps {
  products: IProduct;
}

const ProductItem = ({ products }: IProductItemProps) => {
  const dispatch = useDispatch();
  const handleAddCart = () => {
    dispatch(addCart({products}));
  };

  return (
    <li className="product-item product-sale col-3 col-sm-6">
      <div className="product-img">
        {products.discount !== 0 && (
          <span className="badge badge-danger product-badge">{`-${products.discount}%`}</span>
        )}
        <img src={products.img} alt="T-Shirt Summer Vibes" />
        <div className="product-overlay">
          <Button
            text="ADD TO CART"
            type="primary"
            classButton="btn-addcart"
            onClick={handleAddCart}
          />
        </div>
      </div>
      <h4>{products.name}</h4>
      <div className="item-price">
        {products.discount ? (
          <>
            <span className="item-sale-price">
              {(
                products.price -
                (products.price * products.discount) / 100
              ).toFixed(2)}
            </span>
            <span className="item-old-price">${products.price}</span>
          </>
        ) : (
          <span className="item-current-price">${products.price}</span>
        )}
      </div>
    </li>
  );
};

export default ProductItem;
