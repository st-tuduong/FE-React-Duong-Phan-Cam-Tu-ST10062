export interface IProduct {
  id: number;
  name: string;
  price: number;
  img: string;
  discount: number;
  cart?: any;
  setCart?: any;
}
