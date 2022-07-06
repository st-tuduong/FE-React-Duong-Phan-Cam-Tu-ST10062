import { useDispatch} from 'react-redux';
import Button from '../../../shared/components/partials/Button';
import { ICart } from '../../../shared/interfaces/cart';
import { handleQuantityCart, removeCart } from '../../cart/cart.actions';

interface ICartItemProps {
  item: ICart;
}

const CartItem = ({ item }: ICartItemProps) => {  
  const dispatch = useDispatch();

  const totalCart = (
    (item.price - (item.price * item.discount) / 100) *
    item.qty
  ).toFixed(2);

  const productPrice = (
    item.price -
    (item.price * item.discount) / 100
  ).toFixed(2);

  const handleIncreaseQuantity = () => {
    dispatch(
      handleQuantityCart(item, 1)
    );
  };

  const handleDecreaseQuantity = () => {
    dispatch(
      handleQuantityCart(item, -1)
    );
  };

  const handleRemoveItem = () => {
    dispatch(
      removeCart(item)
    );
  };

  return (
    <tr className="product-item">
      <td className="product-image cart-img">
        <img src={item.image} alt={item.name} />
      </td>
      <td className="product-name">
        <h3>{item.name}</h3>
      </td>
      <td className="product-price">${productPrice}</td>
      <td className="cart-quantitybutton">
        <Button
          classButton="quantity-down"
          onClick={handleDecreaseQuantity}
          text={<i className="fa-solid fa-minus"></i>}
        />
        <span>{item.qty}</span>
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
