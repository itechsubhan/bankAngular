import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BankServiceService } from 'src/app/services/bank-service.service';
import { PaymentServiceService } from 'src/app/services/payment-service.service';
import { paytype } from 'src/types';
import { bankType, transactiontype } from 'src/types';

@Component({
  selector: 'app-pay-amount2',
  templateUrl: './pay-amount2.component.html',
  styleUrls: ['./pay-amount2.component.css'],
  providers: [PaymentServiceService, BankServiceService],
})
export class PayAmount2Component implements OnInit {
  constructor(private bankService: BankServiceService) {}

  paymentForm = new FormGroup({
    customerID: new FormControl('', [Validators.required]),
    bic: new FormControl('', [Validators.required]),
    paymentCode: new FormControl('', [Validators.required]),
    RecieverAccNo: new FormControl('', [Validators.required]),
    amount: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    if (sessionStorage.getItem('Customer_ID') != null) {
      this.customerID = sessionStorage.getItem('Customer_ID')!;
    }
    if (sessionStorage.getItem('BIC') != null) {
      this.bic = sessionStorage.getItem('BIC')!;
    }
    if (sessionStorage.getItem('Name') != null) {
      this.name = sessionStorage.getItem('Name')!;
    }
  }
  name!: string;
  customerID!: string;
  bic!: string;
  Balance: string = '';
  amount!: number;
  RecieverAccNo!: string;

  // par1: string = this.paymentForm.value.bic as string;
  // par2: number = this.paymentForm.value.amount as number;
  // par3: string = this.paymentForm.value as string;

  payAmount() {
    // get transactions
    if (this.paymentForm.valid) {
      var custId = this.customerID;
      var BIC = this.bic;
      var amount = this.paymentForm.controls['amount'].value as string;
      var paymentCode = this.paymentForm.controls['paymentCode']
        .value as string;
      // 	public int sendMoney(@RequestParam String custid,String bic,int sendBalance,String paycode, String recieverAccNo) {

      const url =
        'http://localhost:8081/sendMoney?custid=' +
        custId +
        '&bic=' +
        BIC +
        '&sendBalance=' +
        amount +
        '&paycode=' +
        paymentCode +
        '&recieverAccNo=' +
        this.RecieverAccNo;
      // the url man
      this.bankService.pay2(url).subscribe((data) => {
        console.log('backend test success', data);
        alert('AVAILABLE BALANCE = ' + data);
        this.Balance = 'AVAILABLE BALANCE = ' + data;
        // this.transactionList = data as transactiontype[];
        // JSON.stringify(data)
      });
    } else {
      this.Balance = 'You are Correctly an idiot';
      console.log('form validation failed');
    }
  }
}
