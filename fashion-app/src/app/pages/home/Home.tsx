import campaigns from "../../shared/constant/campaign";
import collections from "../../shared/constant/collection";
import Banner from "./partials/SectionBanner";
import CollectionList from "./partials/CollectionList";
import SectionForYou from "./partials/SectionForYou";
import SectionToDay from "./partials/SectionToDay";
import Subscribe from "./partials/SectionSubscribe";
import SectionShopify from "./partials/SectionShopify";

const Home = () => {
  return (
    <>
      <Banner campaigns={campaigns} />
      <main>
        <CollectionList collections={collections} />
        <SectionForYou />
        <SectionShopify />
        <SectionToDay />
        <Subscribe />
      </main>
    </>
  );
};

export default Home;
