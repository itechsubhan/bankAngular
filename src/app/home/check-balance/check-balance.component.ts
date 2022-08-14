import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentServiceService } from 'src/app/services/payment-service.service';

@Component({
  selector: 'app-check-balance',
  templateUrl: './check-balance.component.html',
  styleUrls: ['./check-balance.component.css'],
})
export class CheckBalanceComponent implements OnInit {
  constructor(private payservice: PaymentServiceService) {}

  Balance: string = '';
  PreviousDataOfCustomerId!: string;
  checkBalanceForm = new FormGroup({
    CustId: new FormControl('', [Validators.required]),
    amount: new FormControl(),
  });

  ngOnInit(): void {
    if (sessionStorage.getItem('Customer_ID') != null) {
      this.PreviousDataOfCustomerId = sessionStorage.getItem('Customer_ID')!;
    }
  }

  checkBalance() {
    this.payservice
      .checkBal(this.checkBalanceForm.controls['CustId'].value as string)
      .subscribe((res) => {
        console.log(res);
        if (res == '0') {
          this.Balance = 'balance is ' + res + ' OR Account Not in Database';
        } else {
          this.Balance = 'balance is ' + res;
        }
      });
  }
}
