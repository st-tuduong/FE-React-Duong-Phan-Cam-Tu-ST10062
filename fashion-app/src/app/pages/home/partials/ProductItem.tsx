import Button from "../../../shared/components/partials/Button";
import { getData, storeData } from "../../../shared/helpers/localStorage";
import { ICart } from "../../../shared/interfaces/cart";
import { IProduct } from "../../../shared/interfaces/product";

  const ProductItem = ({ id, name, price, img, discount }: IProduct) => {
    const handleAddToCart = (id: number) => {
      const productList = getData("cart") || [];
      const productItem: ICart = productList.find((item: ICart) => item.id === id);
      if (productItem) {
        productItem.qty += 1;
      } else {
        const dataItem = {
          id,
          img,
          name,
          price,
          discount,
          qty: 1
        };
        productList.push(dataItem);
      }
      storeData("cart", productList);
    };  
    return (
    <li className="product-item product-sale col-3 col-sm-6">
      <div className="product-img">
        {discount !== 0 && (
          <span className="badge badge-danger product-badge">{`-${discount}%`}</span>
        )}
        <img src={img} alt="T-Shirt Summer Vibes" />
        <div className="product-overlay">
          <Button
            text="ADD TO CART"
            type="primary"
            className="btn-addcart"
            classCol=""
            onClick={() => handleAddToCart(id)}
          />
        </div>
      </div>
      <h4>{name}</h4>
      <div className="item-price">
        {discount ? (
          <>
            <span className="item-sale-price">
              {(price - (price * discount) / 100).toFixed(2)}
            </span>
            <span className="item-old-price">${price}</span>
          </>
        ) : (
          <span className="item-current-price">${price}</span>
        )}
      </div>
    </li>
  );
};

export default ProductItem;
