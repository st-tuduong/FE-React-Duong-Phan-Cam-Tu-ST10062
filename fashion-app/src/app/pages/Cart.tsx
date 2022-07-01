const Cart = () => {
  return (
    <>
      <section className="product-view">
        <div className="container">
          <table className="table table-product">
            <thead>
              <tr className="cart-menu">
                <td className="image" />
                <td className="description">Tên Sản Phẩm</td>
                <td className="price">Đơn Giá</td>
                <td className="quantity">Số Lượng</td>
                <td className="total">Thành Tiền</td>
                <td />
              </tr>
            </thead>
            <tbody>
              <a href="">
                <img src="images/pr1.png" alt="" />
              </a>
              <h4>
                <a href="#">White T-Shirt Summer</a>
              </h4>
              <p>$89.99</p>
              <div className="cart-quantitybutton">
                <a className="cart_quantityup" href="">
                  {" "}
                  +{" "}
                </a>
                <input
                  className="cart-quantityinput"
                  type="text"
                  name="quantity"
                  defaultValue={1}
                  autoComplete="off"
                  size={2}
                />
                <a className="cart-quantitydown" href="">
                  {" "}
                  -{" "}
                </a>
              </div>
              <p className="cart-totalprice">$89.99</p>
              <a className="cart-quantitydelete" href="">
                <i className="fa fa-times" />
              </a>
              <a href="">
                <img src="images/pr1.png" alt="" />
              </a>
              <h4>
                <a href="#">White T-Shirt Summer</a>
              </h4>
              <p>$89.99</p>
              <div className="cart-quantitybutton">
                <a className="cart_quantityup" href="">
                  {" "}
                  +{" "}
                </a>
                <input
                  className="cart-quantityinput"
                  type="text"
                  name="quantity"
                  defaultValue={1}
                  autoComplete="off"
                  size={2}
                />
                <a className="cart-quantitydown" href="">
                  {" "}
                  -{" "}
                </a>
              </div>
              <p className="cart-totalprice">$59</p>
              <a className="cart-quantitydelete" href="">
                <i className="fa fa-times" />
              </a>
              <a href="">
                <img src="images/pr1.png" alt="" />
              </a>
              <h4>
                <a href="#">White T-Shirt Summer</a>
              </h4>
              <p>$59</p>
              <div className="cart-quantitybutton">
                <a className="cart_quantityup" href="">
                  {" "}
                  +{" "}
                </a>
                <input
                  className="cart-quantityinput"
                  type="text"
                  name="quantity"
                  defaultValue={1}
                  autoComplete="off"
                  size={2}
                />
                <a className="cart-quantitydown" href="">
                  {" "}
                  -{" "}
                </a>
              </div>
              <p className="cart-totalprice">$89.99</p>
              <a className="cart-quantitydelete" href="">
                <i className="fa fa-times" />
              </a>
              <a href="">
                <img src="images/pr1.png" alt="" />
              </a>
              <h4>
                <a href="#">White T-Shirt Summer</a>
              </h4>
              <p>$59</p>
              <div className="cart-quantitybutton">
                <a className="cart_quantityup" href="">
                  {" "}
                  +{" "}
                </a>
                <input
                  className="cart-quantityinput"
                  type="text"
                  name="quantity"
                  defaultValue={1}
                  autoComplete="off"
                  size={2}
                />
                <a className="cart-quantitydown" href="">
                  {" "}
                  -{" "}
                </a>
              </div>
              <p className="cart-totalprice">$59</p>
              <a className="cart-quantitydelete" href="">
                <i className="fa fa-times" />
              </a>
            </tbody>
          </table>
          <div className="sub-total">
            <h4>Total</h4>
            <span className="price-total" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
