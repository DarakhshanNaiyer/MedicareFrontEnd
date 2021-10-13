import { ProductService } from './../../../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { MedicineService } from 'src/app/service/medicine.service';
import { ActivatedRoute } from '@angular/router';
import { Medicine } from 'src/app/model/Medicine';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // productList: Product[] = [];

  catId;
  medicines;


  constructor(private ProductService: ProductService,
    private medicineService: MedicineService,
    private _route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.productList = this.ProductService.getProducts();

    this._route.params.subscribe((params) => {
      this.catId = params.catId;
      if (this.catId == 0) {
        console.log("load all med");

        this.medicineService.getActiveMedicines().subscribe(
          (data: any) => {
            //console.log(data.active)

            //   if(data=='Active'){
            //     console.log(data)
            // }
            this.medicines = data;
            // this.medicines.forEach(element => {

            //   if (element.active == 'true') {
            //     console.log(this.medicines)
            //   }

            // });

           // console.log(this.medicines.active);
          },
          (error) => {
            console.log(error);
            //alert('Error in loading medicines');
          }
        );
      } else {
        console.log("load specific med");

        this.medicineService.getActiveMedicinesOfCategory(this.catId).subscribe(
          (data: any) => {
            this.medicines = data;
            console.log(this.medicines);
          },
          (error) => {
            console.log(error);
            alert('Error in loading medicines');
          }
        );
      }
    });
  }
}
