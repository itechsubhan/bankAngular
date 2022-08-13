import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PaymentServiceService {
  constructor(private httpClient: HttpClient) {}

  getTransactions() {
    const url = 'http://localhost:8081/allTransctions';
    return this.httpClient.get(url);
  }

  checkBal(bic: string) {
    const url = 'http://localhost:8081/checkBalance?custid=' + bic;
    return this.httpClient.get(url);
  }
}
