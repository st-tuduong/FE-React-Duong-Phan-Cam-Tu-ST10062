import Button from "../../../shared/components/partials/Button";
import { ICart } from "../../../shared/interfaces/cart";
import CartItem from "./CartItem";

interface ICartListProps {
  carts: ICart[];
  cart: any;
  setCart: any;
}

const CartList = ({ carts,cart, setCart }: ICartListProps) => {
  return (
    <tbody className="product-list">
      {carts.map((cartItem: ICart) => {
        return (
          <CartItem key={cartItem.id} cartItem={cartItem} setCart={setCart} cart={cart}/>
        );
      })}
    </tbody>
  );
};

export default CartList;
