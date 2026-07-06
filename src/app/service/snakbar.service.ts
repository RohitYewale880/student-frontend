import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnakbarService {

  constructor(
    private snakbar: MatSnackBar
  ) { }

  OpenSnakbar(msg: string) {
    this.snakbar.open(msg, 'close', {
      verticalPosition: 'top',
      horizontalPosition: 'right',
      duration: 3000
    })
  }
}
