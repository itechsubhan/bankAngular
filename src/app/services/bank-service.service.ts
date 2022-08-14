import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BankServiceService {
  // constructor() { }
  constructor(private httpClient: HttpClient) {}

  getTransactions() {
    const url = 'http://localhost:8081/allTransctions';
    return this.httpClient.get(url);
  }
  pay2(url: string) {
    // var lasttry = url.toString();
    // console.log(lasttry);
    return this.httpClient.get(url);
  }
}
