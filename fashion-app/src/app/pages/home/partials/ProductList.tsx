import ProductItem from './ProductItem';
import { IProduct } from '../../../shared/interfaces/product';

interface IProductListProps {
  products: IProduct[];
}

const ProductList = ({ products}: IProductListProps) => {
  return (
    <ul className="product-list row">
      {products.map((product: IProduct) => {
        return <ProductItem key={product.id} product={product} />;
      })}
    </ul>
  );
};

export default ProductList;
