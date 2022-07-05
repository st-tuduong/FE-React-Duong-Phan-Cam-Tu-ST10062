import ProductItem from './ProductItem';
import { IProduct } from '../../../shared/interfaces/product';

interface IProductListProps {
  products: IProduct[];
}

const ProductList = ({ products}: IProductListProps) => {
  return (
    <ul className="product-list row">
      {products.map((products: IProduct) => {
        return <ProductItem product={products} />;
      })}
    </ul>
  );
};

export default ProductList;
