import { Component, OnInit } from '@angular/core';
import { bankType, transactiontype } from 'src/types';
import { BankServiceService } from '../services/bank-service.service';

@Component({
  selector: 'app-forloop',
  templateUrl: './forloop.component.html',
  styleUrls: ['./forloop.component.css'],
  providers: [BankServiceService],
})
export class ForloopComponent implements OnInit {
  constructor(private bankService: BankServiceService) {}

  ngOnInit(): void {
    this.getTransactions();
  }

  // transactionList: transactiontype[] = [
  //   {
  //     paymentNO: 111,
  //     bic: 'bic is here',
  //     paymentCode: 'string payment code',
  //     amount: 5000,
  //   },
  //   {
  //     paymentNO: 211,
  //     bic: 'bic is here',
  //     paymentCode: 'string payment code',
  //     amount: 5000,
  //   },
  // ];
  transactionList!: transactiontype[];
  getTransactions() {
    this.bankService.getTransactions().subscribe((data) => {
      console.log('backend test success', data);
      this.transactionList = data as transactiontype[];
      // JSON.stringify(data)
    });
  }

  // bankList:  string[] = ['1','2'];
  bankList: bankType[] = [
    {
      id: 'BXNMMAXYZ',
      name: 'my-name',
      balance: 50000,
    },
    {
      id: 'ID@22',
      name: 'my-name2',
      balance: 6000,
    },
    {
      id: 'BXNMMAXYZ',
      name: 'my-nam2',
      balance: 5000330,
    },
  ];
}
