import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentServiceService } from 'src/app/services/payment-service.service';
import { transactiontype } from 'src/types';

@Component({
  selector: 'app-pay-amount',
  templateUrl: './pay-amount.component.html',
  styleUrls: ['./pay-amount.component.css'],
  providers: [PaymentServiceService],
})
export class PayAmountComponent implements OnInit {
  constructor(private payservice: PaymentServiceService) {}

  ngOnInit(): void {}
  name: string = 'Demoname';
  customerID: string = 'DEMOIDOF CUSTOMER';

  submitedForm() {
    console.log('asubdfksdbfkbsd');
  }

  payAmount(transaction: transactiontype) {
    this.payservice.PayAmountToCustomer(
      transaction.bic,
      transaction.amount,
      transaction
    );
    console.log(transaction);

    alert('you have paid');
  }
}
