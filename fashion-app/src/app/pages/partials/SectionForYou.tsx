import TitleProduct from "../../shared/components/partials/SectionTitle";
import products from "../../shared/constant/product";
import ProductList from "./ProductList";

const SectionForYou = () => {
  return (
    <section className="section-foryou">
      <div className="container">
        <TitleProduct title="Selected just for you" hasButton={true} />
        <ProductList products={products}/>
      </div>
    </section>
  );
};

export default SectionForYou;
