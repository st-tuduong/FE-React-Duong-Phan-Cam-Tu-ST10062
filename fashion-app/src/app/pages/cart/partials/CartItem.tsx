import Button from "../../../shared/components/partials/Button";
import { ICart } from "../../../shared/interfaces/cart";

const CartItem = ({ img, name, price, discount, qty }: ICart) => {
  return (
    <tr className="product-item">
      <td className="product-image cart-img">
        <img src={img} alt={name} />
      </td>
      <td className="product-name">
        <h3>{name}</h3>
      </td>
      <td className="product-price">${(price - (price * discount)/100).toFixed(2)}</td>
      <td className="cart-quantitybutton">
        <a className="quantity-up" href="">
          <i className="fa-solid fa-plus"></i>
        </a>
        <input
          className="quantity-input"
          type="text"
          name="quantity"
          value={qty}
        />
        <a className="quantity-down" href="">
          <i className="fa-solid fa-minus"></i>
        </a>
      </td>
      <td className="cart-totalprice">${((price - (price * discount)/100) * qty).toFixed(2)}</td>
      <td>
        <Button
          className="cart-quantitydelete"
          type="remove"
          text="Remove"
          classCol=""
        />
      </td>
    </tr>
  );
};

export default CartItem;
