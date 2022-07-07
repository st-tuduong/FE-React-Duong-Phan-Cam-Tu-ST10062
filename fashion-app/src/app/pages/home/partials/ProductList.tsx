import ProductItem from './ProductItem';
import { IProduct } from '../../../shared/interfaces/product';

interface IProductListProps {
  categories: any
  products: IProduct[];
}

const ProductList = ({ categories, products}: IProductListProps) => {
  return (
    <ul className="product-list row">
      {products.map((product: IProduct) => {
        return <ProductItem key={product.id} product={product} category={categories}/>;
      })}
    </ul>
  );
};

export default ProductList;
