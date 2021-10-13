import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicineService } from 'src/app/service/medicine.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  medicines;
  constructor(private _route: ActivatedRoute, private medicineService: MedicineService) { }

  ngOnInit(): void {

    this.medicineService.getActiveMedicines().subscribe(
      (data: any) => {
        this.medicines = data;
        console.log(this.medicines);
      },
      (error) => {
        console.log(error);
      }
    );
  }


}

