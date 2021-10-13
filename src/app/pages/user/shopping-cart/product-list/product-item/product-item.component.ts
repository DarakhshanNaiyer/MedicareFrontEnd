import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Medicine } from 'src/app/model/Medicine';
import { Product } from 'src/app/model/Product';
import { MessengerService } from 'src/app/service/messenger.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  productItem: Medicine;

  constructor(private msg: MessengerService, private _router: Router) { }

  ngOnInit(): void {
  }

  handleAddToCart() {
    this.msg.sendMsg(this.productItem);
  }

  buyMedicine() {

    this._router.navigate(['/user-dashboard/payment']);
  }

}
