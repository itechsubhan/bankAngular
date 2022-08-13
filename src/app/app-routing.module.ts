import { compileClassMetadata } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BacktestComponent } from './backendTest/backtest/backtest.component';
import { CheckbalanceComponent } from './components/checkbalance/checkbalance.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ForloopComponent } from './forloop/forloop.component';
import { LoginComponent } from './login/login.component';
import { PaymentHomeComponent } from './payment-home/payment-home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'transactions', component: ForloopComponent },
  { path: 'checkbalance', component: CheckbalanceComponent },
  { path: 'payment', component: PaymentHomeComponent },
  { path: 'backtest', component: BacktestComponent },
  { path: 'dashboard', component: DashboardComponent },
  // {   path:"transferamount",    component:Transferamou
  // }
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
