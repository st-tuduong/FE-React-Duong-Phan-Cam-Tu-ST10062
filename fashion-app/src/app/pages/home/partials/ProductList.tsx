import ProductItem from "./ProductItem";
import { IProduct } from "../../../shared/interfaces/product";

interface IProductListProps {
  products: IProduct[];
  cart: any;
  setCart: any;
}

const ProductList = ({ products, cart, setCart }: IProductListProps) => {
  return (
    <ul className="product-list row">
      {products.map((product: IProduct) => {
        return <ProductItem product={product} cart={cart} setCart={setCart} />;
      })}
    </ul>
  );
};

export default ProductList;
