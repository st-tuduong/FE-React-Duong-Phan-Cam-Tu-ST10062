import ProductList from './ProductList';
import TitleProduct from '../../../shared/components/partials/SectionTitle';
import { IProduct } from '../../../shared/interfaces/product';

interface ISectionProductProps {
  categories: any
  products: IProduct[];
  title: string;
  hasButton?: boolean;
}
const SectionProduct = ({categories, products,title, hasButton}: ISectionProductProps) => {
  return (
    <section className="section-foryou">
      <div className="container">
        <TitleProduct title={title} hasButton={hasButton} />
        <ProductList products = {products} categories= {categories}/>
      </div>
    </section>
  );
};

export default SectionProduct;
