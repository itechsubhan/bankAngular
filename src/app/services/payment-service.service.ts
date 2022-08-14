import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { paytype, transactiontype } from 'src/types';
import { transition } from '@angular/animations';

@Injectable({
  providedIn: 'root',
})
export class PaymentServiceService {
  constructor(private httpClient: HttpClient) {}

  PayAmountToCustomer(custId: string, amount: number, body: paytype) {
    const url =
      'localhost:8080/sendMoney?custid=' + custId + '&sendBalance=' + amount;
    console.log(url);
    console.log(body);
    // return this.httpClient.post(url, body);
    // this.httpClient.post(url,transition)
  }
  pay2(custId: string, amount: number, body: object) {
    const urls =
      'http://localhost:8081/sendMoney?custid=' +
      custId +
      '&sendBalance=' +
      amount;
    // console.log(url);
    JSON.stringify(body);
    console.log(body);
    return this.httpClient.post(urls, body);
    // return this.httpClient.post(urls, body);
  }

  getTransactions() {
    const url = 'http://localhost:8081/allTransctions';
    return this.httpClient.get(url);
  }

  checkBal(custId: string) {
    const url = 'http://localhost:8081/checkBalance?custid=' + custId;
    return this.httpClient.get(url);
  }

  public getSenderId(customerId: number) {
    return this.httpClient.get('http://localhost:8081/details/' + customerId);
  }
  public getRecieverId(BIC: string) {
    return this.httpClient.get('http://localhost:8081/reciever/' + BIC, {
      responseType: 'text',
    });
  }
}
