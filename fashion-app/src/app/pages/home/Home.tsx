import Banner from "../../shared/components/layout/Banner";
import Collection from "../../shared/components/partials/Collection";
import ProductList from "../../shared/components/partials/ProductList";
import Shopify from "../../shared/components/partials/Shopify";

const Home = () => {
  return (
    <>
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
        <section className="section-subscribe">
          <div className="container">
            <div className="subscribe-list row">
              <div className="col-6 col-sm-12">
                <h3>
                  Subscribe to our newsletter andreceive exclusive offers every
                  week
                </h3>
              </div>
              <div className="col-6 col-sm-12">
                <form action="#" className="form-subscribe row">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="form-input col-sm-6"
                  />
                  <button className="btn btn-primary col-sm-6">
                    SUBSCRIBE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
