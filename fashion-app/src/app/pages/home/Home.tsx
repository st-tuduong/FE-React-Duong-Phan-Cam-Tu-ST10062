import Banner from "../../shared/components/layout/Banner";
import Collection from "../../shared/components/layout/Collection";
import Footer from "../../shared/components/layout/Footer";
import Header from "../../shared/components/layout/Header";
import ProductList from "../../shared/components/layout/ProductList";
import Product from "../../shared/components/layout/ProductList";
import Shopify from "../../shared/components/layout/Shopify";
import Subscribe from "../../shared/components/layout/Subscribe";

const Home = () => {
  return (
    <>
      <Header />
      <section className="section-banner">
        <Banner />
      </section>
      <main>
        <Collection />
        <section className="section-foryou">
          <div className="container">
            <div className="section-title">
              <h3>Selected just for you</h3>
              <a href="#" className="btn btn-secondary">
                Show More
              </a>
            </div>
              <ProductList />
          </div>
        </section>
        <section className="section-shopify">
          <div className="container">
            <h3>Why should you choose us?</h3>
            <Shopify />
          </div>
        </section>
        <section className="section-products">
        <div className="container">
          <h3>Products in today</h3>
            <ProductList />
        </div>
      </section>
      <Subscribe />
      </main>
      <Footer />
    </>
  );
}

export default Home;
