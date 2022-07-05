import { Banner, CollectionList, SectionProduct, SectionShopify, Subscribe } from "./partials";
import campaigns from "../../shared/constant/campaign";
import collections from "../../shared/constant/collection";
import { useSelector } from "react-redux";

interface IHomeProps  {
  cart: any;
  setCart: any
}

const Home = ({ cart, setCart }: IHomeProps) => {
  const data = useSelector((state: any) => state.products);  
  return (
    <>
      <Banner campaigns={campaigns} />
      <main>
        <CollectionList collections={collections} />
        <SectionProduct
          cart={cart}
          setCart={setCart}
          title="Selected just for you"
          hasButton
        />
        <SectionShopify />
        <SectionProduct
          cart={cart}
          setCart={setCart}
          title="Products in today"
        />
        <Subscribe />
      </main>
    </>
  );
};

export default Home;
