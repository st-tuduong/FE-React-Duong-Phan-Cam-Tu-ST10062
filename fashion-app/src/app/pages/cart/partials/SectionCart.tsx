import CartList from "./CartList";
import Button from "../../../shared/components/partials/Button";

const SectionCart = ({ cart, setCart }: any) => {
  const total = cart.reduce((total: number, item: any) => total + (item.price - (item.price * item.discount) / 100) * item.qty,0).toFixed(2)
  return (
    <>
      <table className="table table-product col-9">
        <thead>
          <tr className="cart-menu">
            <td className="image" />
            <td className="description">Product</td>
            <td className="price">Price</td>
            <td className="quantity">Quantity</td>
            <td className="total">Total</td>
            <td />
          </tr>
        </thead>
        <CartList setCart={setCart} cart={cart} />
      </table>
      <div className="sub-total col-3">
        <h4>Total</h4>
        <span className="price-total">
          ${total}
        </span>
        <Button
          type="primary"
          text="Checkout"
          classButton="btn-checkout"
        />
      </div>
    </>
  );
};

export default SectionCart;
