import ProductList from './ProductList';
import TitleProduct from '../../../shared/components/partials/SectionTitle';
import { IProduct } from '../../../shared/interfaces/product';
import ProductFilter from './ProductFilter';
import { useState } from 'react';

interface ISectionProductProps {
  products: IProduct[];
  title: string;
  hasButton?: boolean;
}
const SectionProduct = ({products,title, hasButton}: ISectionProductProps) => {
  const [checked, setChecked] = useState<string[]>([]);

  const filterProduct = (productList: IProduct[]) => {
    if(checked.length !==0) {
      return productList.filter((item: IProduct) => checked.includes(item.category));
    }
    return productList;
  }

  return (
    <section className="section-foryou">
      <div className="container">
        <TitleProduct title={title} hasButton={hasButton} />
        <ProductFilter checked={checked} setChecked={setChecked}/>
        <ProductList products = {filterProduct(products)} checked={checked}/>
      </div>
    </section>
  );
};

export default SectionProduct;
