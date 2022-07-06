import CartItem from './CartItem';
import { ICart } from '../../../shared/interfaces/cart';

interface ICartListProps {
  cart: any;
}

const CartList = ({cart}: ICartListProps) => {
  return (
    <tbody className="product-list">
      {cart.map((cart: ICart) => {
        return (
          <CartItem
            cart={cart}
          />
        );
      })}
    </tbody>
  );
};

export default CartList;
