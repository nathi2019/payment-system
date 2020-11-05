import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Address } from 'src/app/model/address';
import { Customer } from 'src/app/model/customer';
import { BankService } from 'src/app/service/bank.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  isSubmitted = true;
  isLoading = true;
  registrationForm: FormGroup;
  cardType = ['visa-card', 'master-card'];
  registeredCustomer: Customer;


  constructor(private formBuilder: FormBuilder, private bankService: BankService) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      ssn: ['', Validators.required],
      street1: ['', Validators.required],
      street2: ['', Validators.required],
      city: ['', Validators.required],
      zip: ['', Validators.required],
      state: ['', Validators.required]
    })
  }
  get getRegistrationFormDataControl() {
    return this.registrationForm.controls;
  }


  onRegisterButtonPressed() {

    this.isSubmitted = true;
    if (this.registrationForm.invalid) return;
    this.isLoading = true;
    this.bankService.addNewCustomer(this.getNewCustomerData(), this.getCardType(2))
      .pipe(first())
      .subscribe(response => {
        this.registeredCustomer = response;
      })


  }
  getNewCustomerData(): Customer {
    let customer = new Customer();
    customer.firstName = this.getRegistrationFormDataControl.firstName.value;
    customer.lastName = this.getRegistrationFormDataControl.lastName.value;
    customer.SSN = this.getRegistrationFormDataControl.ssn.value;
    let date = this.getRegistrationFormDataControl.dateOfBirth.value.split("-", 3);
    customer.dob_year = date[0];
    customer.dob_month = date[1];
    customer.dob_date = date[2];
    let address = new Address();
    address.street1 = this.getRegistrationFormDataControl.street1.value;
    address.street2 = this.getRegistrationFormDataControl.street2.value;
    address.city = this.getRegistrationFormDataControl.city.value;
    address.zip = this.getRegistrationFormDataControl.zip.value;
    address.state = this.getRegistrationFormDataControl.state.value;
    customer.address = address;
    return customer;
  }
  getCardType(max): string {
    let i = Math.floor(Math.random() * Math.floor(max));
    return this.cardType[i];
  }

}
