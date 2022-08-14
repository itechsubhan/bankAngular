import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PaymentServiceService } from 'src/app/services/payment-service.service';

@Component({
  selector: 'app-check-reciever',
  templateUrl: './check-reciever.component.html',
  styleUrls: ['./check-reciever.component.css'],
})
export class CheckRecieverComponent implements OnInit {
  constructor(private payservice: PaymentServiceService) {}

  ngOnInit(): void {}
  RecieverFound: string = '';
  CheckRecieverForm = new FormGroup({
    CustId: new FormControl('', [Validators.required]),
    amount: new FormControl(),
  });

  BIC!: string;
  senders: any;

  public getReciever() {
    let resp = this.payservice.getRecieverId(this.BIC);
    resp.subscribe((data) => {
      this.senders = data;
      console.log(data);
    });
    console.log(resp);
  }
}
