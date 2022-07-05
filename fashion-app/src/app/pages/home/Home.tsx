import { Banner, CollectionList, SectionProduct, SectionShopify, Subscribe } from "./partials";
import campaigns from "../../shared/constant/campaign";
import collections from "../../shared/constant/collection";
import { useEffect, useState } from "react";
import { IProduct } from "../../shared/interfaces/product";
import { getData } from "../../shared/helpers/localStorage";

const Home = () => {
  const [products, setProduct] = useState<IProduct[]>([]);
  useEffect(() => {
    setProduct(getData('products' , products))
  }, [])
  return (
    <>
      <Banner campaigns={campaigns} />
      <main>
        <CollectionList collections={collections} />
        <SectionProduct
          products={products}
          title="Selected just for you"
          hasButton
        />
        <SectionShopify />
        <SectionProduct
          products={products}
          title="Products in today"
        />
        <Subscribe />
      </main>
    </>
  );
};

export default Home;
