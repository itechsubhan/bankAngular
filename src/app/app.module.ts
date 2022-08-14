import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForloopComponent } from './forloop/forloop.component';
import { TransactionRowComponent } from './forloop/transaction-row/transaction-row.component';
import { LoginComponent } from './login/login.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BacktestComponent } from './backendTest/backtest/backtest.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
//insrsssd
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { PayAmountComponent } from './home/pay-amount/pay-amount.component';
import { PayAmount2Component } from './home/pay-amount2/pay-amount2.component';
import { CheckBalanceComponent } from './home/check-balance/check-balance.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { CheckRecieverComponent } from './home/check-reciever/check-reciever.component';
import { CheckCustomerComponent } from './home/check-customer/check-customer.component';
import { CheckSdnComponent } from './home/check-sdn/check-sdn.component';
@NgModule({
  declarations: [
    AppComponent,
    ForloopComponent,
    TransactionRowComponent,
    LoginComponent,
    ErrorPageComponent,
    BacktestComponent,
    FooterComponent,
    DialogComponent,
    PayAmountComponent,
    PayAmount2Component,
    CheckBalanceComponent,
    HomepageComponent,
    CheckRecieverComponent,
    CheckCustomerComponent,
    CheckSdnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
