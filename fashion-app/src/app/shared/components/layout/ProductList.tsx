  import products from "../../constant/product";

  const ProductList = () => {
    return (
        <ul className="product-list row">
          {products.map(function(product) {
            return (
          <li className="product-item product-sale col-3 col-sm-6">
            <a href="#" className="product-link">
              <span className="badge badge-danger product-badge">-30%</span>
              <img src={product.img}  alt="T-Shirt Summer Vibes" />
              <h4>{product.name}</h4>
              <div className="item-price">
                <span className="item-sale-price">{product.price}</span>
                <span className="item-old-price">$119.99</span>
              </div>
            </a>
          </li>          
            )
          })}
        </ul>
    );
  }

  export default ProductList;
