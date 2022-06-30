import { IShopify } from "../../../shared/interfaces/shopify";
import ShopifyItem from "./ShopifyItem";

interface ShopifyListProps {
  shopifys: IShopify[];
}

const ShopifyList = ({ shopifys }: ShopifyListProps) => {
  return (
    <section className="section-shopify">
      <div className="container">
        <h3>Why should you choose us?</h3>
        <ul className="shopify-list row">
          {shopifys.map((shopify) => {
            return (
              <ShopifyItem
                img={shopify.img}
                alt={shopify.alt}
                title={shopify.title}
                text={shopify.text}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ShopifyList;
