import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PaymentServiceService } from 'src/app/services/payment-service.service';
import { transactiontype } from 'src/types';

@Component({
  selector: 'app-checkbalance',
  templateUrl: './checkbalance.component.html',
  styleUrls: ['./checkbalance.component.css'],
  providers: [PaymentServiceService],
})
export class CheckbalanceComponent implements OnInit {
  constructor(private paymentService: PaymentServiceService) {}

  transactionList!: transactiontype[];
  custId: string = 'sjsddb';

  ngOnInit(): void {}
  check_balance() {
    // this.paymentService.checkBal(this.custId).subscribe((data) => {
    //   console.log('backend test success', data);
    //   this.transactionList = data as transactiontype[];
    // });
  }
}
