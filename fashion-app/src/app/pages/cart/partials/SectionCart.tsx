import Button from "../../../shared/components/partials/Button";
import CartList from "./CartList";

const SectionCart = ({cart, setCart}: any) => {
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
        <CartList cart={cart} setCart={setCart} carts={cart}/>
      </table>
      <div className="sub-total col-3">
        <h4>Total</h4>
        <span className="price-total">${(cart.reduce((total: number, item: any) => total + ((item.price - (item.price * item.discount / 100)) * item.qty),0).toFixed(2))}</span>
      <Button type="primary" text="Checkout" classCol="" className="btn-checkout"/>
      </div>
    </>
  );
};

export default SectionCart;
