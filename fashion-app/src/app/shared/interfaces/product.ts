export interface IProduct {
  id: number;
  name: string;
  price: number;
  image: string;
  discount: number;
  cart?: any;
  setCart?: any;
  category?:any;
}
