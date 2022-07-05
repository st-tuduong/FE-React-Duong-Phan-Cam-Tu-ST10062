import { useDispatch } from "react-redux";
import Button from "../../../shared/components/partials/Button";
import { storeData } from "../../../shared/helpers/localStorage";
import { ICart } from "../../../shared/interfaces/cart";
import { IProduct } from "../../../shared/interfaces/product";
import { addCart } from "../home.actions";

interface IProductItemProps {
  product: IProduct;
  cart: any;
  setCart: any;
}

const ProductItem = ({ product, cart, setCart }: IProductItemProps) => {
  const dispatch = useDispatch();
  const handleAddCart = () => {
    dispatch(addCart({   
      product
    }))
  }

  const handleAddToCart = (id: number) => {
    const productItem: ICart = cart.find((item: ICart) => item.id === id);
    if (productItem) {
      productItem.qty += 1;
    } else {
      const dataItem = {
        ...product,
        qty: 1,
      };
      cart.push(dataItem);
    }
    setCart([...cart]);
    storeData("cart", [...cart]);
  };
  return (
    <li className="product-item product-sale col-3 col-sm-6">
      <div className="product-img">
        {product.discount !== 0 && (
          <span className="badge badge-danger product-badge">{`-${product.discount}%`}</span>
        )}
        <img src={product.img} alt="T-Shirt Summer Vibes" />
        <div className="product-overlay">
          <Button
            text="ADD TO CART"
            type="primary"
            classButton="btn-addcart"
            // onClick={() => handleAddToCart(product.id)}
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
