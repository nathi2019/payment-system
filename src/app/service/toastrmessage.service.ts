import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrmessageService {

  constructor(private toastr: ToastrService) { }

  errorMessage(message: string) {
    this.toastr.error(message);
  }
  successMessage(message: string) {
    this.toastr.success(message);
  }
}


