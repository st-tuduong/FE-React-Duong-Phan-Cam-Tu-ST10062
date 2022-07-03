import SectionCart from "./partials/SectionCart";

const Cart = ({ cart, setCart }: any) => {
  return (
    <section className="product-view">
      <div className="container">
        <div className="row">
          <SectionCart cart={cart} setCart={setCart} />
        </div>
      </div>
    </section>
  );
};

export default Cart;
