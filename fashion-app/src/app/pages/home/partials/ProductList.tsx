import { IProduct } from "../../../shared/interfaces/product";
import ProductItem from "./ProductItem";

interface IProductListProps {
  products: IProduct[];
}

const ProductList = ({ products }: IProductListProps) => {
  return (
    <ul className="product-list row">
      {products.map((product: IProduct) => {
        return (
          <ProductItem
            key={product.id}
            id={product.id}
            name={product.name}
            img={product.img}
            discount={product.discount}
            price={product.price}
          />
        );
      })}
    </ul>
  );
};

export default ProductList;
