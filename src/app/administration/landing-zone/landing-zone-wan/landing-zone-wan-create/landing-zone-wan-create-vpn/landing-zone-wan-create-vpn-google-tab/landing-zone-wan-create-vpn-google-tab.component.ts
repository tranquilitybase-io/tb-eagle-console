import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-landing-zone-wan-create-vpn-google-tab',
  templateUrl: './landing-zone-wan-create-vpn-google-tab.component.html',
  styleUrls: ['./landing-zone-wan-create-vpn-google-tab.component.scss']
})
export class LandingZoneWanCreateVpnGoogleTabComponent {
  @Input() formGroup: FormGroup;

  constructor() {}

  get f() {
    return this.formGroup.controls;
  }
}
