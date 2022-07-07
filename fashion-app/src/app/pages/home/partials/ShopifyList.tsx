import ShopifyItem from './ShopifyItem';
import { IShopify } from '../../../shared/interfaces/shopify';

interface IShopifyListProps {
  shopifys: IShopify[];
}

const ShopifyList = ({ shopifys }: IShopifyListProps) => {
  return (
    <ul className="shopify-list row">
      {shopifys.map((shopify) => {
        return (
          <ShopifyItem
            key={shopify.title}
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
