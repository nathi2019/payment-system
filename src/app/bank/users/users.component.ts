import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { BankService } from 'src/app/service/bank.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  accounts: any;

  constructor(private bankService: BankService) { }

  ngOnInit(): void {
   this.getAllAccounts(); 
  }
  getAllAccounts() {
    console.log("hello ")
    this.bankService.getAllAccounts().pipe(first()).subscribe(
      response => {
       console.log(response)
        this.accounts = response;
      }
    )
  }

  onAccountLinkPressed(transation){
    console.log(transation)
    this.bankService.sendSelectedAccountTransaction(transation);
  }
}
