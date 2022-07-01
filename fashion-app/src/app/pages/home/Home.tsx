import campaigns from "../../shared/constant/campaign";
import collections from "../../shared/constant/collection";
import products from "../../shared/constant/product";
import shopifys from "../../shared/constant/shopify";
import Banner from "../partials/Banner";
import CollectionList from "../partials/CollectionList";
import SectionForYou from "../partials/SectionForYou";
import SectionToDay from "../partials/SectionToDay";
import ShopifyList from "../partials/ShopifyList";
import Subscribe from "../partials/Subscribe";

const Home = () => {
  return (
    <>
      <Banner campaigns={campaigns} />
      <main>
        <CollectionList collections={collections} />
        <SectionForYou />
        <ShopifyList shopifys={shopifys} />
        <SectionToDay />
        <Subscribe />
      </main>
    </>
  );
};

export default Home;
