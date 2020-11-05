import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankComponent } from './bank/bank.component';
import { NewAccountComponent } from './bank/new-account/new-account.component';
import { DepositComponent } from './bank/deposit/deposit.component';
import { UsersComponent } from './bank/users/users.component';
import { AccountDetailComponent } from './bank/account-detail/account-detail.component';
import { PaymentComponent } from './bank/payment/payment.component';
import { WithdrawComponent } from './bank/withdraw/withdraw.component';


const routes: Routes = [
  { path: '', redirectTo: 'bank', pathMatch: 'full' },


  {
    path: 'bank',
    children: [

      { path: '', component: UsersComponent },
      {
        path: 'accounts',
        children: [
          { path: 'account-detail', component: AccountDetailComponent }
        ],

        component: UsersComponent
      },
      { path: 'add-customer', component: NewAccountComponent },
      { path: 'deposit', component: DepositComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'withdraw', component: WithdrawComponent }
    ],

    component: BankComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
