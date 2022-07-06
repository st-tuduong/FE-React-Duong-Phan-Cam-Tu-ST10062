import ProductList from './ProductList';
import TitleProduct from '../../../shared/components/partials/SectionTitle';
import products from "../../../shared/constant/product"
import { IProduct } from '../../../shared/interfaces/product';

interface ISectionProductProps {
  products: IProduct[];
  title: string;
  hasButton?: boolean;
}
const SectionProduct = ({products, title, hasButton}: ISectionProductProps) => {
  return (
    <section className="section-foryou">
      <div className="container">
        <TitleProduct title={title} hasButton={hasButton} />
        <ProductList products={products} />
      </div>
    </section>
  );
};

export default SectionProduct;
