import { Component, Input, OnInit } from '@angular/core';
import { bankType, transactiontype } from 'src/types';

@Component({
  selector: 'app-transaction-row',
  templateUrl: './transaction-row.component.html',
  styleUrls: ['./transaction-row.component.css'],
})
export class TransactionRowComponent implements OnInit {
  @Input() banklist!: bankType;
  @Input() transactionList!: transactiontype;

  constructor() {}

  convert_to_full_msg(code: string) {
    // code = 'CHQB';
    var mess;
    switch (code) {
      case 'CHQB':
        mess = 'beneficiary customer must be paid by cheque only.';
        break;
      case 'CORT':
        mess = 'Payment is made in settlement for a trade.';
        break;
      case 'HOLD':
        mess =
          'Beneficiary customer or claimant will call upon identification.';
        break;
      case 'INTC':
        mess = 'Payment between two companies that belongs to the same group.';
        break;
      case 'PHOB':
        mess = 'Please advise the intermediary institution by phone.';
        break;
      case 'PHOI':
        mess = 'Please advise the intermediary by phone.';
        break;
      case 'PHON':
        mess = 'Please advise the account with institution by phone.';
        break;
      case 'REPA':
        mess = 'Payments has a related e-Payments reference.';
        break;
      case 'SDVA':
        mess = 'Payment must be executed with same day value to the';
        break;
      default:
        mess = '';
        break;
    }
    return mess;
  }

  ngOnInit(): void {}
}
