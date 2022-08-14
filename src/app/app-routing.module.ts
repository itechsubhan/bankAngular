import { compileClassMetadata } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { BacktestComponent } from './backendTest/backtest/backtest.component';

// import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ForloopComponent } from './forloop/forloop.component';
import { CheckBalanceComponent } from './home/check-balance/check-balance.component';
import { CheckCustomerComponent } from './home/check-customer/check-customer.component';
import { CheckRecieverComponent } from './home/check-reciever/check-reciever.component';
import { CheckSdnComponent } from './home/check-sdn/check-sdn.component';
import { HomepageComponent } from './home/homepage/homepage.component';
// import { PayAmountComponent } from './home/pay-amount/pay-amount.component';
// import { PayAmount2Component } from './home/pay-amount2/pay-amount2.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'transactions', component: ForloopComponent },
  { path: 'checkbalance', component: CheckBalanceComponent },
  { path: 'checkreciever', component: CheckRecieverComponent },
  { path: 'checkcustomer', component: CheckCustomerComponent },
  { path: 'payment', component: CheckSdnComponent },
  // { path: 'aniket', component:  },
  // { path: 'backtest', component: BacktestComponent },

  { path: 'home', component: HomepageComponent },
  { path: '**', component: ErrorPageComponent },
];

// const routes: Routes = [
//   { path: '', component: DemoComponent },
//   { path:'products', component:ProductListComponent },
//   { path:'checkout', component: CheckoutComponent },
//   { path:'**', component: ErrorPageComponent }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
