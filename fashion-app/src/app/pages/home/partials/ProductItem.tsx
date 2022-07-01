import Button from "../../../shared/components/partials/Button";
import products from "../../../shared/constant/product";
import { IProduct } from "../../../shared/interfaces/product";

const ProductItem = ({ id, name, price, img, discount }: IProduct) => {
  const handleAddToCart = (e: Event) => {
    const storageItem = localStorage.getItem("cart") || '{}';    
    const product = products.find((item) => item.id === id);    
      const listItem = JSON.parse(storageItem);
      if (listItem[id]) {
        listItem[id].qty += 1;
      }else {
        listItem[id] = {
          id: id,
          name: product?.name,
          price: product?.price,
          img: product?.img,
          discount: product?.discount,
          qty: 1,
        };
      }
      localStorage.setItem("cart", JSON.stringify(listItem));
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
            classCol=""
            onClick={handleAddToCart}
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
