import campaigns from "../../shared/constant/campaign";
import collections from "../../shared/constant/collection";
import products from "../../shared/constant/product";
import shopifys from "../../shared/constant/shopify";
import Banner from "../partials/banner/Banner";
import CollectionList from "../partials/collection/CollectionList";
import ProductList from "../partials/product/ProductList";
import ShopifyList from "../partials/shopify/ShopifyList";
import Subscribe from "../partials/subscribe/Subscribe";

const Home = () => {
  return (
    <>
      <Banner campaigns = {campaigns}/>
      <main>
        <CollectionList collections = {collections}/>
        <ProductList products= {products}/>
        <ShopifyList shopifys={shopifys}/>
        <ProductList products={products} />
        <Subscribe />
      </main>
    </>
  );
};

export default Home;
