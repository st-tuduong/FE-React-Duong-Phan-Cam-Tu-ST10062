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
              {/* <tr>
                <td class="cart-product">
                  <a href=""><img src="images/pr1.png" alt=""></a>
                </td>
                <td class="cart-description">
                  <h4><a href="#">White T-Shirt Summer</a></h4>
                </td>
                <td class="cart-price">
                  <p>$89.99</p>
                </td>
                <td class="cart-quantity">
                  <div class="cart-quantitybutton">
                    <a class="cart_quantityup" href=""> + </a>
                    <input class="cart-quantityinput" type="text" name="quantity" value="1" autocomplete="off" size="2">
                    <a class="cart-quantitydown" href=""> - </a>
                  </div>
                </td>
                <td class="cart-total">
                  <p class="cart-totalprice">$89.99</p>
                </td>
                <td class="cart-delete">
                  <a class="cart-quantitydelete" href=""><i class="fa fa-times"></i></a>
                </td>
              </tr>
              <tr>
                <td class="cart-product">
                  <a href=""><img src="images/pr1.png" alt=""></a>
                </td>
                <td class="cart-description">
                  <h4><a href="#">White T-Shirt Summer</a></h4>
                </td>
                <td class="cart-price">
                  <p>$89.99</p>
                </td>
                <td class="cart-quantity">
                  <div class="cart-quantitybutton">
                    <a class="cart_quantityup" href=""> + </a>
                    <input class="cart-quantityinput" type="text" name="quantity" value="1" autocomplete="off" size="2">
                    <a class="cart-quantitydown" href=""> - </a>
                  </div>
                </td>
                <td class="cart-total">
                  <p class="cart-totalprice">$59</p>
                </td>
                <td class="cart-delete">
                  <a class="cart-quantitydelete" href=""><i class="fa fa-times"></i></a>
                </td>
              </tr>
              <tr>
                <td class="cart-product">
                  <a href=""><img src="images/pr1.png" alt=""></a>
                </td>
                <td class="cart-description">
                  <h4><a href="#">White T-Shirt Summer</a></h4>
                </td>
                <td class="cart-price">
                  <p>$59</p>
                </td>
                <td class="cart-quantity">
                  <div class="cart-quantitybutton">
                    <a class="cart_quantityup" href=""> + </a>
                    <input class="cart-quantityinput" type="text" name="quantity" value="1" autocomplete="off" size="2">
                    <a class="cart-quantitydown" href=""> - </a>
                  </div>
                </td>
                <td class="cart-total">
                  <p class="cart-totalprice">$89.99</p>
                </td>
                <td class="cart-delete">
                  <a class="cart-quantitydelete" href=""><i class="fa fa-times"></i></a>
                </td>
              </tr>
              <tr>
                <td class="cart-product">
                  <a href=""><img src="images/pr1.png" alt=""></a>
                </td>
                <td class="cart-description">
                  <h4><a href="#">White T-Shirt Summer</a></h4>
                </td>
                <td class="cart-price">
                  <p>$59</p>
                </td>
                <td class="cart-quantity">
                  <div class="cart-quantitybutton">
                    <a class="cart_quantityup" href=""> + </a>
                    <input class="cart-quantityinput" type="text" name="quantity" value="1" autocomplete="off" size="2">
                    <a class="cart-quantitydown" href=""> - </a>
                  </div>
                </td>
                <td class="cart-total">
                  <p class="cart-totalprice">$59</p>
                </td>
                <td class="cart-delete">
                  <a class="cart-quantitydelete" href=""><i class="fa fa-times"></i></a>
                </td>
              </tr>  */}
            </tbody>
          </table>
          <div className="sub-total">
            <h4>Total</h4>
            <span className="price-total" />
          </div>  
        </div>
      </section></>
   );
}

export default Cart;