import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Application } from '@app/dashboards/solutions/solutions.model';
import { Store, select } from '@ngrx/store';
import { startDeployApplication, dismissDeploymentAppReadyAlert } from '@app/dashboards/solutions/solutions.actions';
import {
  selectInProgressApp,
  selectProgressApp,
  selectIsDeploymentAppReady
} from '@app/dashboards/solutions/solutions.reducers';
import { Observable } from 'rxjs';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { AppUnderDeploymentComponent } from '@app/dashboards/solutions/snack-bar/app-under-deployment/app-under-deployment.component';
import { AppIsDeployedComponent } from '@app/dashboards/solutions/snack-bar/app-is-deployed/app-is-deployed.component';

@Component({
  selector: 'app-application-card',
  templateUrl: './application-card.component.html',
  styleUrls: ['./application-card.component.scss']
})
export class ApplicationCardComponent implements OnInit {
  @Input() app: Application;
  active = false;

  deploymentInProgressApp$: Observable<boolean>;
  percentage$: Observable<number>;

  constructor(private store: Store<any>, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.deploymentInProgressApp$ = this.store.pipe(select(selectInProgressApp(this.app.name)));
    this.percentage$ = this.store.pipe(select(selectProgressApp(this.app.name)));
    this.store.pipe(select(selectIsDeploymentAppReady)).subscribe(isReady => {
      if (isReady) {
        this.snackBar
          .openFromComponent(AppIsDeployedComponent)
          .afterDismissed()
          .subscribe(() => {
            this.store.dispatch(dismissDeploymentAppReadyAlert());
          });
      }
    });
  }

  sensitivityColor(app): string {
    return String(app.activator.sensitivity).toLowerCase() === 'restricted' ? 'red' : 'dark-grey';
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.active = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.active = false;
  }

  deploy() {
    this.snackBar.openFromComponent(AppUnderDeploymentComponent);
    this.store.dispatch(startDeployApplication({ name: this.app.name }));
  }

  get lastUpdated(): Date {
    return new Date(this.app.lastUpdated || null);
  }
}
