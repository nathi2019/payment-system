import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/service/bank.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  payments: any;

  constructor(private bankService: BankService) { }

  ngOnInit(): void {
    this.getAllPayments();
  }
  getAllPayments() {
    this.bankService.getAllPayments().subscribe(response => {
      this.payments = response;
    })
  }
}
