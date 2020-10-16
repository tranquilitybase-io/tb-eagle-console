import { Component, Injector, Inject } from '@angular/core';
import {
  MatSnackBar,
  MAT_SNACK_BAR_DATA,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatSnackBarConfig
} from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';
import { BreakpointObserver } from '@angular/cdk/layout';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-app-is-deployed',
  templateUrl: './api-call-status.component.html',
  styleUrls: ['./api-call-status.component.scss']
})
export class ApiCallStatusComponent extends MatSnackBar {
  constructor(
    private overlay: Overlay,
    private injector: Injector,
    private breakpointObserver: BreakpointObserver,
    private liveAnnouncer: LiveAnnouncer,
    private snackBar: MatSnackBar,
    @Inject(MAT_SNACK_BAR_DATA) public data,
    @Inject(MAT_SNACK_BAR_DEFAULT_OPTIONS) private config: MatSnackBarConfig
  ) {
    super(overlay, liveAnnouncer, injector, breakpointObserver, snackBar, config);
  }
}
