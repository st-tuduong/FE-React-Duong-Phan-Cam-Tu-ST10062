import Icon from "../../../asset/icon";

function Shopify() {
  return (
    <ul className="shopify-list row">
      <li className="shopify-item col-3 col-sm-12">
        <img src={Icon.Shipping} alt="Free Shipping" />
        <h4 className="shopify-title">Free Shipping</h4>
        <p className="shopify-content">
          All purchases over $199 are eligible forfree shipping via USPS First
          Class Mail.
        </p>
      </li>
      <li className="shopify-item col-3 col-sm-12">
        <img
          src={Icon.Pay}
          alt="Easy Payments"
          className="img-payments"
        />
        <h4 className="shopify-title">Easy Payments</h4>
        <p className="shopify-content">
          All payments are processed instantlyover a secure payment protocol.
        </p>
      </li>
      <li className="shopify-item col-3 col-sm-12">
        <img src={Icon.Money} alt="Money-Back Guarantee" />
        <h4 className="shopify-title">Money-Back Guarantee</h4>
        <p className="shopify-content">
          If an item arrived damaged or you'vechanged your mind, you can send
          itback for a full refund.
        </p>
      </li>
      <li className="shopify-item col-3 col-sm-12">
        <img src={Icon.Quality} alt="Finest Quality" />
        <h4 className="shopify-title">Finest Quality</h4>
        <p className="shopify-content">
          Designed to last, each of our products hasbeen crafted with the finest
          materials.
        </p>
      </li>
    </ul>
  );
}

export default Shopify;
