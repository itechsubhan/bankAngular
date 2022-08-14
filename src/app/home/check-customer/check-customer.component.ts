import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PaymentServiceService } from 'src/app/services/payment-service.service';

@Component({
  selector: 'app-check-customer',
  templateUrl: './check-customer.component.html',
  styleUrls: ['./check-customer.component.css'],
})
export class CheckCustomerComponent implements OnInit {
  constructor(private payservice: PaymentServiceService) {}

  ngOnInit(): void {}
  customerId!: number;
  customerName!: string;
  senders: any;
  open: boolean = false;

  opendetails() {
    this.open = true;
  }

  saveCustId() {
    sessionStorage.setItem('Customer_ID', String(this.customerId));
    sessionStorage.setItem('Name', String(this.customerName));
  }

  public getCustomer() {
    let resp = this.payservice.getSenderId(this.customerId);
    resp.subscribe((data) => {
      this.senders = data;
      console.log(data);
      if (data != null) {
        this.customerName = this.senders.account_Holder_Name;
        this.saveCustId();
        this.opendetails();
      }
    });
  }
}
