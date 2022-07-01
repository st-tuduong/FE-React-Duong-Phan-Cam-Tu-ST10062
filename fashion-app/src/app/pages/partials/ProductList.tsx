import { IProduct } from "../../shared/interfaces/product";
import ProductItem from "./ProductItem";
import HeadingProduct from "../../shared/components/partials/SectionTitle";

interface IProductListProps {
  products: IProduct[];
}

const ProductList = ({ products}: IProductListProps) => {
  return (
        <ul className="product-list row">
          {products.map((product: IProduct) => {
            return (
              <ProductItem
                name={product.name}
                price={product.price}
                img={product.img}
                discount={product.discount}
              />
            );
          })}
        </ul>
  );
};

export default ProductList;
