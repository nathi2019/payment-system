import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { first } from 'rxjs/operators';
import { BankService } from 'src/app/service/bank.service';
import { ToastrmessageService } from '../../service/toastrmessage.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.css']
})
export class DepositComponent implements OnInit {

  amount: number;
  accountNumber: string;
  depositForm: FormGroup;
  isSubmitted: boolean = false;
  isLoading: boolean = false;
  account: any;

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrmessageService,
    private bankService: BankService) { }

  ngOnInit(): void {
    this.depositForm = this.formBuilder.group({
      amount: ['', Validators.required],
      accountNumber: ['', Validators.required]
    })
  }
  get getDepositInformation() {
    return this.depositForm.controls;
  }
  onDepositButtonPressed() {
    this.isSubmitted = true;
    if (this.depositForm.invalid) return;
    this.amount = this.getDepositInformation.amount.value;
    this.accountNumber = this.getDepositInformation.accountNumber.value;

    this.bankService.deposit(this.accountNumber, this.amount)
      .pipe(first())
      .subscribe(response => {
        console.log(response)
        if (response.transferStatus === 'FAILED') {
          this.toastr.errorMessage(response.transferMessage);
        } else {
          this.toastr.successMessage(response.transferMessage);
        }




      })


  }

}
