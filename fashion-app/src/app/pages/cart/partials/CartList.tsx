import CartItem from "./CartItem";
import { ICart } from "../../../shared/interfaces/cart";

interface ICartListProps {
  carts: any;
}

const CartList = ({carts}: ICartListProps) => {
  return (
    <tbody className="product-list">
      {carts.map((cartItem: ICart) => {
        return (
          <CartItem
            key={cartItem.id}
            cartItem={cartItem}
          />
        );
      })}
    </tbody>
  );
};

export default CartList;
