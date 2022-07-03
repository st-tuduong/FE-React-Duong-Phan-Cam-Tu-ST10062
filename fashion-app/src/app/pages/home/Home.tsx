import campaigns from "../../shared/constant/campaign";
import collections from "../../shared/constant/collection";
import Banner from "./partials/SectionBanner";
import CollectionList from "./partials/CollectionList";
import SectionForYou from "./partials/SectionForYou";
import SectionToDay from "./partials/SectionToDay";
import Subscribe from "./partials/SectionSubscribe";
import SectionShopify from "./partials/SectionShopify";

const Home = ({cart, setCart} : any) => {
  return (
    <>
      <Banner campaigns={campaigns} />
      <main>
        <CollectionList collections={collections} />
        <SectionForYou cart={cart} setCart={setCart}/>
        <SectionShopify />
        <SectionToDay cart={cart} setCart={setCart}/>
        <Subscribe />
      </main>
    </>
  );
};

export default Home;
