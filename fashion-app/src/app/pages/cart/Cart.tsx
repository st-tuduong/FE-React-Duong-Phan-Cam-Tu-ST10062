import { useSelector } from 'react-redux';
import SectionCart from './partials/SectionCart';

const Cart = () => {
  const {carts} = useSelector((state: any) => state.products);
    
  return (
    <section className="product-view">
      <div className="container">
        <div className="row">
          <SectionCart carts={carts}/>
        </div>
      </div>
    </section>
  );
};

export default Cart;
