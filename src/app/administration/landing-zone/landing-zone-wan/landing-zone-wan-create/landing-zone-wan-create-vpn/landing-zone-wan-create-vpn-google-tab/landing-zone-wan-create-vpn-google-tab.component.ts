import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-landing-zone-wan-create-vpn-google-tab',
  templateUrl: './landing-zone-wan-create-vpn-google-tab.component.html',
  styleUrls: ['./landing-zone-wan-create-vpn-google-tab.component.scss']
})
export class LandingZoneWanCreateVpnGoogleTabComponent implements OnInit {
  @Input() formGroup: FormGroup;

  constructor() {}

  ngOnInit() {}
}
