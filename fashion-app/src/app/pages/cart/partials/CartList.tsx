import CartItem from './CartItem';
import { ICart } from '../../../shared/interfaces/cart';

interface ICartListProps {
  carts: any;
}

const CartList = ({carts}: ICartListProps) => {
  return (
    <tbody className="product-list">
      {carts.map((cart: ICart) => {
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
