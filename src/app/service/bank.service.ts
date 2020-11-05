import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Customer } from '../model/customer';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient) { }

  private transactions: Subject<any> = new Subject<any>();

  getTransaction$() {
    return this.transactions.asObservable();
  }

  sendSelectedAccountTransaction(mesage: any) {
    this.transactions.next(mesage);
  }



  getAllAccounts() {
    return this.http.get<Array<any>>(environment.API_BANK_URL + "accounts");
  }
  deposit(accountNumber: string, amount: number) {
    return this.http.post<any>(environment.API_BANK_URL + "deposit", { accountNumber: accountNumber, amount: amount });

  }
  withdraw(accountNumber: string, amount: number) {
    return this.http.post<any>(environment.API_BANK_URL + "withdraw", { accountNumber: accountNumber, amount: amount });

  }
  addNewCustomer(customer: Customer, cardType: string) {
    return this.http.post<any>(environment.API_BANK_URL + 'users/' + cardType, customer);
  }
  getAllPayments(){
    return this.http.get<any>(environment.API_PAYMENT_URL); 
  }
}
