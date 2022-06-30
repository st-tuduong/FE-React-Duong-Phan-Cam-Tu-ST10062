import Icon from "../../../asset/icon";
import Image from "../../../asset/images";

function Banner() {
  return (
    <>
      <div className="container">
        <div className="banner-inner">
          <div className="banner-content">
            <h2>
              Sale of the
              <span>summer</span>
              collection
            </h2>
            <a href="#" className="banner-link">
              <img
                src={Icon.Arrow}
                className="icon-arrow"
                alt="Shop Now"
              />
              <span>Shop Now</span>
            </a>
          </div>
        </div>
      </div>
      <div className="banner-campaign">
        <ul className="campaign-list row">
          <li className="campaign-item col-4">
            <img src={Image.PolicyShipping} alt="Free Shipping" />
            <div className="campaign-content">
              <h3>Free Shipping</h3>
              <p>On purchases over $199</p>
            </div>
          </li>
          <li className="campaign-item col-4">
            <img src={Image.PolicySmile} alt="99% Satisfied Customers" />
            <div className="campaign-content">
              <h3>99% Satisfield Customers</h3>
              <p>Our clients' opinions speak for themeselves</p>
            </div>
          </li>
          <li className="campaign-item col-4">
            <img src={Image.PolicyQuality} alt="Originality Guaranteed" />
            <div className="campaign-content">
              <h3>Originality Guaranteed</h3>
              <p>30 days warranty for each product from our store</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Banner;
