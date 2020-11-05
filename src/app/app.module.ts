import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BankComponent } from './bank/bank.component';
import { BankMenuComponent } from './bank/bank-menu/bank-menu.component';
import { NewAccountComponent } from './bank/new-account/new-account.component';
import { DepositComponent } from './bank/deposit/deposit.component';
import { UsersComponent } from './bank/users/users.component';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { from } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { ToastrModule } from 'ngx-toastr';
import { AccountDetailComponent } from './bank/account-detail/account-detail.component';
import { PaymentComponent } from './bank/payment/payment.component';
import { WithdrawComponent } from './bank/withdraw/withdraw.component';

@NgModule({
  declarations: [
    AppComponent,
    BankComponent,
    BankMenuComponent,
    NewAccountComponent,
    DepositComponent,
    UsersComponent,
    AccountDetailComponent,
    PaymentComponent,
    WithdrawComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 1500,
      positionClass: 'toast-top-center',
      preventDuplicates: false
    })
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
