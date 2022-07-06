import CartItem from './CartItem';
import { ICart } from '../../../shared/interfaces/cart';
import { useSelector } from 'react-redux';


const CartList = () => {
  const cartData = useSelector((state: any) => state.cart?.data);
  return (
    <tbody className="product-list">
      {cartData.map((item: ICart) => {
        return (
          <CartItem
            key={item.id}
            item={item}
          />
        );
      })}
    </tbody>
  );
};

export default CartList;
