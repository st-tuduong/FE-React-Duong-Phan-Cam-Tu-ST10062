import {Banner,CollectionList,SectionProduct,SectionShopify,Subscribe,} from "./partials";
import campaigns from "../../shared/constant/campaign";
import collections from "../../shared/constant/collection";
import { useEffect, useState } from "react";
import { IProduct } from "../../shared/interfaces/product";
import axios from "axios";

const Home = () => {
  const [products, setProduct] = useState<IProduct[]>([]);

  useEffect(() => {
    axios
      .get("https://6088e20da6f4a300174271e7.mockapi.io/products")
      .then((response) => {
        setProduct(response.data);
      })
      
      .catch((error) => {
      });
  }, []);

  return (
      <main>
        <Banner campaigns={campaigns} />
        <CollectionList collections={collections} />
        <SectionProduct
          products={products}
          title="Selected just for you"
          hasButton
        />
        <SectionShopify />
        <SectionProduct products={products} title="Products in today" />
        <Subscribe />
      </main>
  );
};

export default Home;
