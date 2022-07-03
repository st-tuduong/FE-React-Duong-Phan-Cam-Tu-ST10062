import TitleProduct from "../../../shared/components/partials/SectionTitle";
import products from "../../../shared/constant/product";
import ProductList from "./ProductList";

const SectionToDay = ({cart, setCart} : any) => {
  return (
    <section className="section-foryou">
      <div className="container">
        <TitleProduct title="Products in today" hasButton={false} />
        <ProductList products={products} cart={cart} setCart={setCart}/>
      </div>
    </section>
  );
};

export default SectionToDay;
