import Banner from "./partials/SectionBanner";
import CollectionList from "./partials/CollectionList";
import SectionProduct from "./partials/SectionProduct";
import SectionShopify from "./partials/SectionShopify";
import Subscribe from "./partials/SectionSubscribe";
import campaigns from "../../shared/constant/campaign";
import collections from "../../shared/constant/collection";

const Home = ({ cart, setCart }: any) => {
  return (
    <>
      <Banner campaigns={campaigns} />
      <main>
        <CollectionList collections={collections} />
        <SectionProduct
          cart={cart}
          setCart={setCart}
          title="Selected just for you"
          hasButton={true}
        />
        <SectionShopify />
        <SectionProduct
          cart={cart}
          setCart={setCart}
          title="Products in today"
          hasButton={false}
        />
        <Subscribe />
      </main>
    </>
  );
};

export default Home;
