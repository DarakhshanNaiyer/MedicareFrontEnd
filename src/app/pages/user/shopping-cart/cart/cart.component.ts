import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/model/cart-Item';
import { Product } from 'src/app/model/Product';
import { CartService } from 'src/app/service/cart.service';
import { MessengerService } from 'src/app/service/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];
  // cartItems: [
  //   {id:1, productId: 2,productName:'Test1', qty: 3, price:344},
  //   {id:2, productId: 4, productName:'Test1' ,qty: 3, price:344},
  //   {id:3, productId: 5, productName:'Test1' ,qty: 3, price:344},
  //   {id:4, productId: 6, productName:'Test1',qty: 3, price:344},
  // ];
  //cartItems = [];
  cartTotal = 0;


  constructor(private cartService: CartService, private msg: MessengerService, private _router: Router) { }

  ngOnInit() {
    //this.cartItems=this.cartService.getcartItem();

    this.msg.getMsg().subscribe(
      (product: any) => {
        this.addProductToCart(product);

      })
  }

  addProductToCart(product: any) {

    let productExists = false;

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId == product.id) {
        this.cartItems[i].qty++;
        productExists = true;
        break;
      }
    }

    if (!productExists) {
      const it = new CartItem(1, product.id, product.name, 1, product.price);
      this.cartItems.push(it);
    }


    this.cartTotal = 0;

    this.cartItems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
    })
  }

  buyMedicine() {

    this._router.navigate(['/user-dashboard/payment'], {
      queryParams: { cartItem: this.cartItems }
    });

  }


}
