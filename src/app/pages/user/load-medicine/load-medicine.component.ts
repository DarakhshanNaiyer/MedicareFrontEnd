import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicineService } from 'src/app/service/medicine.service';

@Component({
  selector: 'app-load-medicine',
  templateUrl: './load-medicine.component.html',
  styleUrls: ['./load-medicine.component.css']
})
export class LoadMedicineComponent implements OnInit {

  catId;
  medicines;
  constructor(private _route: ActivatedRoute, private medicineService:MedicineService) { }

  ngOnInit(): void {

    this._route.params.subscribe((params) =>{
      this.catId = params.catId;
      if(this.catId == 0){
        console.log("load all med");
  
        this.medicineService.getActiveMedicines().subscribe(
          (data:any)=>{
           //console.log(data.active)

          //   if(data=='Active'){
          //     console.log(data)
          // }
            this.medicines = data;
            this.medicines.forEach(element => {

              if(element.active == 'true'){
                console.log(this.medicines)
              }
              
            });
            
            console.log(this.medicines.active);
          },
          (error) => {
            console.log(error);
            //alert('Error in loading medicines');
          }
        );
      }else{
        console.log("load specific med");

        this.medicineService.getActiveMedicinesOfCategory(this.catId).subscribe(
          (data:any)=>{
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
