import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BankServiceService } from 'src/app/services/bank-service.service';
import { productType, users } from 'src/types';

@Component({
  selector: 'app-backtest',
  templateUrl: './backtest.component.html',
  styleUrls: ['./backtest.component.css'],
  providers: [BankServiceService],
})
export class BacktestComponent implements OnInit {
  plist: productType[] = [
    {
      productId: 100,
      productName: 'Test',
      productPrice: 1000000.567,
      productStock: 10,
      productImage: '/assests/file_name.jpg',
    },
  ];

  constructor(
    private bankService: BankServiceService,
    private router: Router
  ) {}

  submiting(u: users) {
    console.warn(u);
  }

  ngOnInit(): void {
    this.testBackend();
  }
  testBackend() {
    this.bankService.getTransactions().subscribe((data) => {
      console.log('backend test success', JSON.stringify(data));
      // JSON.stringify(data)
    });
  }

  /*
  // getData() {
  //   this.bankService.getProducts().subscribe(
  //     (data) => {
  //       console.log('SUCCESS', data);
  //       this.plist = data as productType[];
  //     },
  //     (error) => {
  //       console.log('ERROR', error);
  //     }
  //   );
  // }*/
}

/**
 * 
 * 
 * import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { CurrencyService } from 'src/app/services/currency.service';
import { ProductService } from 'src/app/services/product.service';
import { ProductType } from 'src/types';



@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers:[
    ProductService,
  ]
})
export class ProductListComponent implements OnInit {
  @Input() selectedCurrency!:string;
  



 constructor(private productService: ProductService,
    private router:Router,
    private currencyService : CurrencyService) { }



 ngOnInit(): void {
    this.getData();
    this.getCode();
  }
  addItem(data:any){
    this.router.navigate(['/cart']);
    console.log("Added to cart",data);
  }
  getData() {
    this.productService.getProducts().subscribe(
      (data) => {
        console.log('SUCCESS', data);
        this.plist = data as ProductType[];



     },
      (error) => {
        console.log('ERROR', error);
      }
    );
  }
  getCode() {
    this.currencyService.currencyObservable.subscribe((code) => {
      this.selectedCurrency = code;
    });
  }



}
 */
