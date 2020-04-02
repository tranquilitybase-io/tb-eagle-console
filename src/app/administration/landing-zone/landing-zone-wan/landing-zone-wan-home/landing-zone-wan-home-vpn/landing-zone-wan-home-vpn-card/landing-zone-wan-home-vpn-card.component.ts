import { Component, OnInit, Input } from '@angular/core';
import { WanConfiguration } from '../../../landing-zone-wan.model';

@Component({
  selector: 'app-landing-zone-wan-home-vpn-card',
  templateUrl: './landing-zone-wan-home-vpn-card.component.html',
  styleUrls: ['./landing-zone-wan-home-vpn-card.component.scss']
})
export class LandingZoneWanHomeVpnCardComponent implements OnInit {
  @Input() wanVpn: WanConfiguration;

  constructor() {}

  ngOnInit() {}
}
