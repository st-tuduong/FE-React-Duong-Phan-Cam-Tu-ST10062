import Image from "../../../asset/images";

const Footer = () => {
  return (
    <footer>
      <section className="section-footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-left">
              <a className="footer-link" href="#">
                <img src={Image.Logo} alt="E-Shop" />
                <img src={Image.EShop} alt="E-Shop" />
              </a>
              <p>
                House My Brand designs clothing for the young, the old
                &amp;everyone in between – but most importantly, for the
                fashionable
              </p>
              <ul className="social-list">
                <li className="social-item">
                  <a href="#" className="social-link">
                    <i className="fa-brands fa-facebook" />
                  </a>
                </li>
                <li className="social-item">
                  <a href="#" className="social-link">
                    <i className="fa-brands fa-twitter" />
                  </a>
                </li>
                <li className="social-item">
                  <a href="#" className="social-link">
                    <i className="fa-brands fa-linkedin-in" />
                  </a>
                </li>
                <li className="social-item">
                  <a href="#" className="social-link">
                    <i className="fa-brands fa-instagram" />
                  </a>
                </li>
                <li className="social-item">
                  <a href="#" className="social-link">
                    <i className="fa-brands fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-right">
              <ul className="footer-list">
                <li className="footer-item">
                  <h4 className="option-title">Shopping online</h4>
                  <ul className="options-list">
                    <li className="option-item">
                      <a href="#">Order Status</a>
                    </li>
                    <li className="option-item">
                      <a href="#">Shipping and Delivery</a>
                    </li>
                    <li className="option-item">
                      <a href="#">Returns</a>
                    </li>
                    <li className="option-item">
                      <a href="#">Payment Options</a>
                    </li>
                    <li className="option-item">
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </li>
                <li className="footer-item">
                  <h4 className="option-title">Information</h4>
                  <ul className="options-list">
                    <li className="option-item">
                      <a href="#">Gift Cards</a>
                    </li>
                    <li className="option-item">
                      <a href="#">Find a store</a>
                    </li>
                    <li className="option-item">
                      <a href="#">Newsletter</a>
                    </li>
                    <li className="option-item">
                      <a href="#">Become a member</a>
                    </li>
                    <li className="option-item">
                      <a href="#">Site feedback</a>
                    </li>
                  </ul>
                </li>
                <li className="footer-item">
                  <h4 className="option-title">Contact</h4>
                  <ul className="options-list">
                    <li className="option-item">
                      <a href="mailto: store@uikit.com">store@uikit.com</a>
                    </li>
                    <li className="option-item">
                      <a href="tel: +1 131 138 138">Hotline: +1 131 138 138</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            DESIGN BY ICEO.CO - © 2019. ALL RIGHTS RESERVED.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
