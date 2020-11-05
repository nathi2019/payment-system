import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrmessageService } from '../../service/toastrmessage.service';
import { first } from 'rxjs/operators';
import { BankService } from 'src/app/service/bank.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  amount: number;
  accountNumber: string;
  withdrawalForm: FormGroup;
  isSubmitted: boolean = false;
  isLoading: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private toastr: ToastrmessageService,
    private bankService: BankService) { }

  ngOnInit(): void {
    this.withdrawalForm = this.formBuilder.group({
      amount: ['', Validators.required],
      accountNumber: ['', Validators.required]
    })
  }
  get getDepositInformation() {
    return this.withdrawalForm.controls;
  }
  onWithdrawButtonPressed() {
    this.isSubmitted = true;
    if (this.withdrawalForm.invalid) return;
    this.amount = this.getDepositInformation.amount.value;
    this.accountNumber = this.getDepositInformation.accountNumber.value;

    this.bankService.withdraw(this.accountNumber, this.amount)
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
