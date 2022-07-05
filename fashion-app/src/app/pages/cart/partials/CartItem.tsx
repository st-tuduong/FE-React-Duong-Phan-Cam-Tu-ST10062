import { useDispatch} from 'react-redux';
import Button from '../../../shared/components/partials/Button';
import { ICart } from '../../../shared/interfaces/cart';
import { addCart, decreaseCart, removeCart } from '../../cart/cart.actions';

interface ICartItemProps {
  cart: ICart;
}

const CartItem = ({ cart }: ICartItemProps) => {
  const dispatch = useDispatch();

  const totalCart = (
    (cart.price - (cart.price * cart.discount) / 100) *
    cart.qty
  ).toFixed(2);

  const productPrice = (
    cart.price -
    (cart.price * cart.discount) / 100
  ).toFixed(2);

  const handleIncreaseQuantity = () => {
    dispatch(
      addCart(cart)
    );
  };

  const handleDecreaseQuantity = () => {
    dispatch(
      decreaseCart(cart)
    );
  };

  const handleRemoveItem = () => {
    dispatch(
      removeCart(cart)
    );
  };

  return (
    <tr className="product-item">
      <td className="product-image cart-img">
        <img src={cart.image} alt={cart.name} />
      </td>
      <td className="product-name">
        <h3>{cart.name}</h3>
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
          value={cart.qty}
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
