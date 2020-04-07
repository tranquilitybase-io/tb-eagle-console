import { Component, OnInit, Input, HostListener } from '@angular/core';
import { WanConfiguration } from '../../../landing-zone-wan.model';

import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  selectInProgress,
  selectProgress
} from '@app/administration/landing-zone/landing-zone-wan/landing-zone-wan.reducers';
import { startDeployment } from '@app/administration/landing-zone/landing-zone-wan/landing-zone-wan.actions';

@Component({
  selector: 'app-landing-zone-wan-home-vpn-card',
  templateUrl: './landing-zone-wan-home-vpn-card.component.html',
  styleUrls: ['./landing-zone-wan-home-vpn-card.component.scss']
})
export class LandingZoneWanHomeVpnCardComponent implements OnInit {
  @Input() wanVpn: WanConfiguration;

  active = false;

  deploymentInProgress$: Observable<boolean>;
  percentage$: Observable<number>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.deploymentInProgress$ = this.store.pipe(select(selectInProgress(this.wanVpn.id.toString())));
    this.percentage$ = this.store.pipe(select(selectProgress(this.wanVpn.id.toString())));
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
    this.store.dispatch(startDeployment({ name: String(this.wanVpn.id) }));
  }
}
