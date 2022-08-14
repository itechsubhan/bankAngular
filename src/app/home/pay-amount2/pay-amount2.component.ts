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
    bic: new FormControl('', [Validators.required]),
    paymentCode: new FormControl('', [Validators.required]),
    amount: new FormControl(),
  });

  ngOnInit(): void {}
  name: string = 'Demoname';
  customerID: string = 'DEMOIDOF CUSTOMER';
  Balance: string = '';
  submitedForm() {
    console.log('asubdfksdbfkbsd');
  }

  // par1: string = this.paymentForm.value.bic as string;
  // par2: number = this.paymentForm.value.amount as number;
  // par3: string = this.paymentForm.value as string;

  payAmount() {
    // get transactions
    var custId = this.paymentForm.controls['bic'].value as string;
    var amount = this.paymentForm.controls['amount'].value as string;
    var paymentCode = this.paymentForm.controls['paymentCode'].value as string;
    const url =
      'http://localhost:8081/sendMoney?custid=' +
      custId +
      '&sendBalance=' +
      amount +
      '&paycode=' +
      paymentCode;
    this.bankService.pay2(url).subscribe((data) => {
      console.log('backend test success', data);
      alert('AVAILABLE BALANCE = ' + data);
      this.Balance = 'AVAILABLE BALANCE = ' + data;
      // this.transactionList = data as transactiontype[];
      // JSON.stringify(data)
    });

    // this.payservice
    //   .pay2(
    //     this.paymentForm.controls['bic'].value as string,
    //     this.paymentForm.controls['amount'].value,
    //     this.paymentForm.value
    //   )
    //   .subscribe((res) => {
    //     console.log('backend test success', res);
    //   });

    // console.log(this.paymentForm.value);
    // console.log(this.bodyobj);
    // this.payservice.PayAmountToCustomer(
    //   this.par1,
    //   this.par2,
    //   // this.paymentForm.value
    // );

    // alert('you have paid');
  }
}
