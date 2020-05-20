import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Application } from '@app/mission-control/applications/applications.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  selectDeployedApp,
  selectInProgressApp,
  selectProgressApp,
  selectIsDeploymentAppReady
} from '@app/mission-control/solutions/solutions.reducer';
import {
  dismissDeploymentAppReadyAlert,
  startDeployApplication
} from '@app/mission-control/solutions/solutions.actions';
import { AppUnderDeploymentComponent } from '@app/shared/snack-bar/app-under-deployment/app-under-deployment.component';
import { AppIsDeployedComponent } from '@app/shared/snack-bar/app-is-deployed/app-is-deployed.component';

@Component({
  selector: 'app-solutions-view-app-grid-card',
  templateUrl: './solutions-view-app-grid-card.component.html',
  styleUrls: ['./solutions-view-app-grid-card.component.scss']
})
export class SolutionsViewAppGridCardComponent implements OnInit {
  @Input() app: Application;
  active = false;

  deploymentInProgressApp$: Observable<boolean>;
  deployed$: Observable<boolean>;
  percentage$: Observable<number>;

  constructor(private store: Store<any>, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.deploymentInProgressApp$ = this.store.pipe(select(selectInProgressApp(this.app.name)));
    this.deployed$ = this.store.pipe(select(selectDeployedApp(this.app.name)));

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
