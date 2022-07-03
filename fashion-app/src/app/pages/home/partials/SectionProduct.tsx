import ProductList from "./ProductList";
import TitleProduct from "../../../shared/components/partials/SectionTitle";
import products from "../../../shared/constant/product";

interface ISectionProductProps {
  cart: any;
  setCart: any;
  title: string;
  hasButton: boolean;
}
const SectionProduct = ({
  cart,
  setCart,
  title,
  hasButton,
}: ISectionProductProps) => {
  return (
    <section className="section-foryou">
      <div className="container">
        <TitleProduct title={title} hasButton={hasButton} />
        <ProductList products={products} cart={cart} setCart={setCart} />
      </div>
    </section>
  );
};

export default SectionProduct;
