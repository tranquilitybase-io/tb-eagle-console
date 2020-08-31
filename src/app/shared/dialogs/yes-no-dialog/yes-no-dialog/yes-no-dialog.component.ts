import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-yes-no-dialog',
  templateUrl: './yes-no-dialog.component.html',
  styleUrls: ['./yes-no-dialog.component.scss']
})
export class YesNoDialogComponent implements OnInit {
  userInput$: Observable<boolean>;

  constructor(
    private dialogRef: MatDialogRef<YesNoDialogComponent, boolean>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.userInput$ = new Observable((observer: Observer<boolean>) => {
      this.dialogRef.afterClosed().subscribe(
        result => {
          observer.next(result);
          observer.complete();
        },
        error => {
          observer.next(false);
          observer.complete();
        }
      );
    });
  }

  yes() {
    this.dialogRef.close(true);
  }

  no() {
    this.dialogRef.close(false);
  }
}
