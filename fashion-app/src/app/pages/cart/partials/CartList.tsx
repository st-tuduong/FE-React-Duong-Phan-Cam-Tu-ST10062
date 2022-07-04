import CartItem from "./CartItem";
import { ICart } from "../../../shared/interfaces/cart";

interface ICartListProps {
  cart: any;
  setCart: any;
}

const CartList = ({ cart, setCart }: ICartListProps) => {
  return (
    <tbody className="product-list">
      {cart.map((cartItem: ICart) => {
        return (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
            setCart={setCart}
            cart={cart}
          />
        );
      })}
    </tbody>
  );
};

export default CartList;
