import { Product } from "./Product";

export class CartItem {
  id: number;
  productId: number;
  productName: string;
  qty: number;
  price: number;

  // constructor(id: number, product: Product, qty = 1) {
  //   this.id = id;
  //   this.productId = product.id;
  //   this.productName = product.name;
  //   this.price = product.price;
  //   this.qty = qty;
  // }

  constructor(id: number, productId:number, productName: string, qty = 1, price:number) {
    this.id = id;
    this.productId = productId;
    this.productName = productName;
    this.price = price;
    this.qty = qty;
  }
}