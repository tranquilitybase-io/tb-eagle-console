import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-landing-zone-wan-forms-vpn-on-premise-tab',
  templateUrl: './landing-zone-wan-forms-vpn-on-premise-tab.component.html',
  styleUrls: ['./landing-zone-wan-forms-vpn-on-premise-tab.component.scss']
})
export class LandingZoneWanFormsVpnOnPremiseTabComponent implements OnInit {
  @Input() formGroup: FormGroup;

  constructor() {}

  ngOnInit() {}
}
