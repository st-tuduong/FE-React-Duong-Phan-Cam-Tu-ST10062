import { useDispatch} from 'react-redux';
import Button from '../../../shared/components/partials/Button';
import { ICart } from '../../../shared/interfaces/cart';
import { addCart, decreaseCart, removeCart } from '../../home/home.actions';

interface ICartItemProps {
  products: ICart;
}

const CartItem = ({ products }: ICartItemProps) => {
  const dispatch = useDispatch();

  const totalCart = (
    (products.price - (products.price * products.discount) / 100) *
    products.qty
  ).toFixed(2);

  const productPrice = (
    products.price -
    (products.price * products.discount) / 100
  ).toFixed(2);

  const handleIncreaseQuantity = () => {
    dispatch(
      addCart({
        products,
      })
    );
  };

  const handleDecreaseQuantity = () => {
    dispatch(
      decreaseCart({
        products,
      })
    );
  };

  const handleRemoveItem = () => {
    dispatch(
      removeCart({
        products,
      })
    );
  };

  return (
    <tr className="product-item">
      <td className="product-image cart-img">
        <img src={products.img} alt={products.name} />
      </td>
      <td className="product-name">
        <h3>{products.name}</h3>
      </td>
      <td className="product-price">${productPrice}</td>
      <td className="cart-quantitybutton">
        <Button
          classButton="quantity-down"
          onClick={handleDecreaseQuantity}
          text={<i className="fa-solid fa-minus"></i>}
        />
        <input
          className="quantity-input"
          type="text"
          name="quantity"
          value={products.qty}
        />
        <Button
          classButton="quantity-up"
          onClick={handleIncreaseQuantity}
          text={<i className="fa-solid fa-plus"></i>}
        />
      </td>
      <td className="cart-totalprice">${totalCart}</td>
      <td>
        <Button
          classButton="cart-quantitydelete"
          type="remove"
          text="Remove"
          onClick={handleRemoveItem}
        />
      </td>
    </tr>
  );
};

export default CartItem;
