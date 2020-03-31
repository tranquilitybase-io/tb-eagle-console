import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-missing-available-solutions-dialog',
  templateUrl: './missing-available-solutions-dialog.component.html',
  styleUrls: ['./missing-available-solutions-dialog.component.scss']
})
export class MissingAvailableSolutionsDialogComponent implements OnInit {
  constructor(private router: Router, private dialogRef: MatDialogRef<MissingAvailableSolutionsDialogComponent>) {}

  ngOnInit() {}

  activateArchived() {
    this.router.navigateByUrl(`/dashboard/solutions?categorySwitch=Archived`);
    this.dialogRef.close();
  }

  createNew() {
    this.router.navigateByUrl(`/dashboard/solutions/create`);
    this.dialogRef.close();
  }
}
