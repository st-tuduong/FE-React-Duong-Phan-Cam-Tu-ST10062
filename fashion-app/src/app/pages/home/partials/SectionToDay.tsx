import TitleProduct from "../../../shared/components/partials/SectionTitle";
import products from "../../../shared/constant/product";
import ProductList from "./ProductList";

const SectionToDay = () => {
  return (
    <section className="section-foryou">
      <div className="container">
        <TitleProduct title="Products in today" hasButton={false} />
        <ProductList products={products}/>
      </div>
    </section>
  );
};

export default SectionToDay;
