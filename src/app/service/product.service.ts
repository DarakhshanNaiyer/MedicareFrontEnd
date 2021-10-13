import { Injectable } from '@angular/core';
import { Product } from '../model/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[]=[
    new Product(1,'Product1','This is prod desc',100),
    new Product(2,'Product2','This is prod desc',200),
    new Product(3,'Product3','This is prod desc',300),
    new Product(4,'Product4','This is prod desc',400),

  ]

  constructor() { }

  getProducts(): Product[]{
     return this.products;
  }


}
