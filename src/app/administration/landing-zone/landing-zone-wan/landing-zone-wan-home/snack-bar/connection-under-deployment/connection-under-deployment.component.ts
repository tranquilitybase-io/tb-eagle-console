import { Component, Injector, Inject } from '@angular/core';
import { MatSnackBar, MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Overlay } from '@angular/cdk/overlay';
import { BreakpointObserver } from '@angular/cdk/layout';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-connection-under-deployment',
  templateUrl: './connection-under-deployment.component.html',
  styleUrls: ['./connection-under-deployment.component.scss']
})
export class ConnectionUnderDeploymentComponent extends MatSnackBar {
  constructor(
    private overlay: Overlay,
    private injector: Injector,
    private breakpointObserver: BreakpointObserver,
    private liveAnnouncer: LiveAnnouncer,
    private snackBar: MatSnackBar,
    @Inject(MAT_SNACK_BAR_DEFAULT_OPTIONS) private config: MatSnackBarConfig
  ) {
    super(overlay, liveAnnouncer, injector, breakpointObserver, snackBar, config);
  }
}
