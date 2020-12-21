import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { deleteSettings } from '../../settings.actions';

@Component({
  selector: 'app-activator-store-dialog-grant-access',
  templateUrl: './settings-dialog-clear.component.html',
  styleUrls: ['./settings-dialog-clear.component.scss']
})
export class SettingsDialogComponent implements OnInit {
  constructor(private store: Store<any>, private dialogRef: MatDialogRef<SettingsDialogComponent>) {}

  ngOnInit() {}

  confirm() {
    this.store.dispatch(deleteSettings());
    this.dialogRef.close('Yes');
  }

  cancel() {
    this.dialogRef.close('No');
  }
}
