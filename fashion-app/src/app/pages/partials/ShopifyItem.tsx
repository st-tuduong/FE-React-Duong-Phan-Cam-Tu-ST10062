import { IShopify } from "../../shared/interfaces/shopify";

const ShopifyItem = ({ img, alt, title, text }: IShopify) => {
  return (
    <li className="shopify-item col-3 col-sm-12">
      <img src={img} alt={alt} />
      <h4 className="shopify-title">{title}</h4>
      <p className="shopify-content">{text}</p>
    </li>
  );
};

export default ShopifyItem;
