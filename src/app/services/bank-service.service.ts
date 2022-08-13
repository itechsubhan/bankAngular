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
}

// @Injectable({
//   providedIn: 'root' // alternative way of registering a service globally
// })
// @Injectable()
// export class ProductService {
//   // Dependency injection

// }
