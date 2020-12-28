import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiCallStatusComponent } from './api-call-status.component';

@Injectable({
  providedIn: 'root'
})
export class ApiCallStatusSnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  success = (message: string) => {
    this.snackBar.openFromComponent(ApiCallStatusComponent, {
      data: { message, success: true },
      duration: 3500
    });
  };

  error = (message: string) => {
    this.snackBar.openFromComponent(ApiCallStatusComponent, {
      data: { message, success: false },
      duration: 3500
    });
  };
}
