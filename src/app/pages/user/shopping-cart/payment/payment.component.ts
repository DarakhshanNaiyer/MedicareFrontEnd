import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public payment = {
    name: '',
    address: '',
    phone: '',
    cardNumber: '',
    expDate: '',
    nameOnCard: ''
  }

  constructor(private _route: ActivatedRoute, private _router: Router, private _snack : MatSnackBar) { }

  ngOnInit(): void {
  }

  formSubmit() {
    console.log('asd')
    if(this.payment.name == '' || this.payment.name == null){
      this._snack.open('Username is required !!', '', {
        duration : 3000,
        verticalPosition: 'top',
      });
      return;
    }  
    
    if(this.payment.address == '' || this.payment.address == null){
      this._snack.open('Address is required !!', '', {
        duration : 3000,
        verticalPosition: 'top',
      });
      return;
    }  

    if(this.payment.phone == '' || this.payment.phone == null){
      this._snack.open('Contact Number is required !!', '', {
        duration : 3000,
        verticalPosition: 'top',
      });
      return;
    }  


    if(this.payment.cardNumber == '' || this.payment.cardNumber == null){
      this._snack.open('Card Number is required !!', '', {
        duration : 3000,
        verticalPosition: 'top',
      });
      return;
    }  


    if(this.payment.expDate == '' || this.payment.expDate == null){
      this._snack.open('Expiry Date is required !!', '', {
        duration : 3000,
        verticalPosition: 'top',
      });
      return;
    } 
    
    if(this.payment.nameOnCard == '' || this.payment.nameOnCard == null){
      this._snack.open('Name on Card is required !!', '', {
        duration : 3000,
        verticalPosition: 'top',
      });
      return;
    }  

    Swal.fire('Successfully done', 'Payment Successful!!', 'success');
  }

}
