import { IShopify } from "../../../shared/interfaces/shopify";
import ShopifyItem from "./ShopifyItem";

interface IShopifyListProps {
  shopifys: IShopify[];
}

const ShopifyList = ({ shopifys }: IShopifyListProps) => {
  return (
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
  );
};

export default ShopifyList;