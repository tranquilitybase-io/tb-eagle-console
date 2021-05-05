import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activator-store-dialog-missing-solutions',
  templateUrl: './activator-store-dialog-missing-solutions.component.html',
  styleUrls: ['./activator-store-dialog-missing-solutions.component.scss']
})
export class ActivatorStoreDialogMissingSolutionsComponent implements OnInit {
  constructor(private router: Router, private dialogRef: MatDialogRef<ActivatorStoreDialogMissingSolutionsComponent>) {}

  ngOnInit() {}

  activateArchived() {
    this.router.navigateByUrl(`/mission-control/solutions?isActive=false`);
    this.dialogRef.close();
  }

  createNew() {
    this.router.navigateByUrl(`/mission-control/solutions/create`);
    this.dialogRef.close();
  }
}
