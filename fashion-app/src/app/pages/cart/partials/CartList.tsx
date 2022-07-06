import CartItem from './CartItem';
import { ICart } from '../../../shared/interfaces/cart';
import { useSelector } from 'react-redux';


const CartList = () => {
  const cartData = useSelector((state: any) => state.cart?.data);
  return (
    <tbody className="product-list">
      {cartData.map((cart: ICart) => {
        return (
          <CartItem
            key={cart.id}
            cart={cart}
          />
        );
      })}
    </tbody>
  );
};

export default CartList;
