import shopifys from "../../shared/constant/shopify";
import ShopifyList from "./ShopifyList";

const SectionShopify = () => {
  return (
    <section className="section-shopify">
      <div className="container">
        <h3>Why should you choose us?</h3>
        <ShopifyList shopifys={shopifys}/>
      </div>
    </section>
  );
};

export default SectionShopify;
