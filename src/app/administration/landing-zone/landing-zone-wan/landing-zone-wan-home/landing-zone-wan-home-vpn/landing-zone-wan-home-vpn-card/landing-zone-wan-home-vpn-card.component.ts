import { Component, OnInit, Input, HostListener } from '@angular/core';
import { WanConfiguration } from '../../../landing-zone-wan.model';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  selectInProgress,
  selectDeployed,
  selectProgress,
  selectIsDeploymentReady
} from '@app/administration/landing-zone/landing-zone-wan/landing-zone-wan.reducer';
import {
  startConnectionDeployment,
  dismissDeploymentConnectionReadyAlert
} from '@app/administration/landing-zone/landing-zone-wan/landing-zone-wan.actions';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConnectionUnderDeploymentComponent } from '../../snack-bar/connection-under-deployment/connection-under-deployment.component';
import { ConnectionIsDeployedComponent } from '../../snack-bar/connection-is-deployed/connection-is-deployed.component';

@Component({
  selector: 'app-landing-zone-wan-home-vpn-card',
  templateUrl: './landing-zone-wan-home-vpn-card.component.html',
  styleUrls: ['./landing-zone-wan-home-vpn-card.component.scss']
})
export class LandingZoneWanHomeVpnCardComponent implements OnInit {
  @Input() wanVpn: WanConfiguration;

  active = false;

  deploymentInProgress$: Observable<boolean>;
  deployed$: Observable<boolean>;
  percentage$: Observable<number>;

  constructor(private store: Store<any>, private snackBar: MatSnackBar) {}

  ngOnInit() {
    this.deploymentInProgress$ = this.store.pipe(select(selectInProgress(this.wanVpn.id.toString())));
    this.deployed$ = this.store.pipe(select(selectDeployed(this.wanVpn.id.toString())));

    this.percentage$ = this.store.pipe(select(selectProgress(this.wanVpn.id.toString())));
    this.store.pipe(select(selectIsDeploymentReady)).subscribe(isReady => {
      if (isReady) {
        this.snackBar
          .openFromComponent(ConnectionIsDeployedComponent)
          .afterDismissed()
          .subscribe(() => {
            this.store.dispatch(dismissDeploymentConnectionReadyAlert());
          });
      }
    });
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
    this.snackBar.openFromComponent(ConnectionUnderDeploymentComponent);
    this.store.dispatch(startConnectionDeployment({ name: String(this.wanVpn.id) }));
  }
}
