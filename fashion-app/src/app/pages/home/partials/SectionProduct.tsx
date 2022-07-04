import ProductList from "./ProductList";
import TitleProduct from "../../../shared/components/partials/SectionTitle";
import products from "../../../shared/constant/product";
import { ICart } from "../../../shared/interfaces/cart";

interface ISectionProductProps {
  cart: ICart;
  setCart: ICart[];
  title: string;
  hasButton?: boolean;
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
