import { IProduct } from "../../../shared/interfaces/product";
import ProductItem from "./ProductItem";

interface ProductListProps {
  products: IProduct[];
  title: string,
  hasButton: boolean
}



const ProductList = ({ products, title, hasButton}: ProductListProps) => {
  return (
    <section className="section-foryou">
      <div className="container">
        <div className="section-title">
          <h3>{title}</h3>
          {hasButton && <a href="#" className="btn btn-secondary">
            Show More
          </a>}
        </div>
        <ul className="product-list row">
          {products.map((product: any) => {
            return (
              <ProductItem
                name={product.name}
                price={product.price}
                img={product.img}
                discount={product.discount}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default ProductList;
