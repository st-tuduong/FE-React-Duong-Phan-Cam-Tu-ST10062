import Button from "../../../shared/components/partials/Button";
import { ICart } from "../../../shared/interfaces/cart";
import CartItem from "./CartItem";

interface ICartListProps {
  carts: ICart[];
}

const CartList = ({ carts }: ICartListProps) => {
  return (
    <tbody className="product-list">
      {carts.map((cart: ICart) => {
        return (
          <CartItem
            id={cart.id}
            img={cart.img}
            name={cart.name}
            price={cart.price}
            discount={cart.discount}
            qty={cart.qty}
          />
        );
      })}
    </tbody>
  );
};

export default CartList;
