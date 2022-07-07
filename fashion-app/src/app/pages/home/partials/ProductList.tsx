import ProductItem from './ProductItem';
import { IProduct } from '../../../shared/interfaces/product';
import { useSelector } from 'react-redux';

interface IProductListProps {
  products: IProduct[];
}

const ProductList = ({ products}: IProductListProps) => {
  const product = useSelector((state: any) => state.home)
  console.log(product)

  const filterCategory = (str: any) => {
    if(str) {
      return product.filter((item: any) => {
        return item.category.incluldes(str)
      })
    }
    return product;
  }

  return (
    <ul className="product-list row">
      {products.map((product: IProduct) => {
        return <ProductItem key={product.id} product={filterCategory(product)} />;
      })}
    </ul>
  );
};

export default ProductList;
