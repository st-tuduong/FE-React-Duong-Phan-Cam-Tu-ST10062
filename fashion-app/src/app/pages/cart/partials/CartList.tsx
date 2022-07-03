import Button from "../../../shared/components/partials/Button";
import { ICart } from "../../../shared/interfaces/cart";
import CartItem from "./CartItem";

interface ICartListProps {
  carts: ICart[];
  setCart: any
}

const CartList = ({ carts, setCart }: ICartListProps) => {
  return (
    <tbody className="product-list">
      {carts.map((cartItem) => {
        return (
          <CartItem key={cartItem.id} cartItem={cartItem} setCart={setCart}/>
        );
      })}
    </tbody>
  );
};

export default CartList;
