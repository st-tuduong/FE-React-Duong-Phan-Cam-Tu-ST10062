import ProductList from "./ProductList";
import TitleProduct from "../../../shared/components/partials/SectionTitle";
import { IProduct } from "../../../shared/interfaces/product";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "../home.actions";

interface ISectionProductProps {
  products: IProduct[];
  title: string;
  hasButton?: boolean;
}
const SectionProduct = ({
  products,
  title,
  hasButton,
}: ISectionProductProps) => {

  const dispatch = useDispatch();
  const handleChange = (e: any) => {
    dispatch(getCategory(e.target.value))
  }
  
  return (
    <section className="section-foryou">
      <div className="container">
        <TitleProduct title={title} hasButton={hasButton} />
        <div className="checkbox-category">
          <label className="form-control">
            <input type="checkbox" onChange={handleChange} value="1"/>
            Checkbox
          </label>
          <label className="form-control">
            <input type="checkbox" onChange={handleChange} value="2"/>
            Checkbox
          </label>
          <label className="form-control">
            <input type="checkbox" onChange={handleChange} value="3"/>
            Checkbox
          </label>
          <label className="form-control">
            <input type="checkbox" onChange={handleChange} value="4"/>
            Checkbox
          </label>
        </div>
        <ProductList products={products} />
      </div>
    </section>
  );
};

export default SectionProduct;
