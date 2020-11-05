import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BankService } from 'src/app/service/bank.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.css']
})
export class AccountDetailComponent implements OnInit, OnDestroy {
  transactions: any
  subscription: Subscription;

  constructor(private bankService: BankService) {
    this.subscription = this.bankService.getTransaction$().subscribe(transaction => {
      if (transaction) {
        console.log('in the account details: '+transaction.transactions)
        this.transactions = transaction;
      }
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
  }

}
