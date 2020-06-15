import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { KeyValue } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-landing-zone-wan-create-vpn-on-premise-tab',
  templateUrl: './landing-zone-wan-create-vpn-on-premise-tab.component.html',
  styleUrls: ['./landing-zone-wan-create-vpn-on-premise-tab.component.scss']
})
export class LandingZoneWanCreateVpnOnPremiseTabComponent implements OnInit {
  @Input() formGroup: FormGroup;

  vpnOnPremiseVendorList: KeyValue<string, string>[];
  primarySharedSecret: Observable<string>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.vpnOnPremiseVendorList = this.route.snapshot.data['vpnOnPremiseVendorList'];
  }

  get f() {
    return this.formGroup.controls;
  }

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  generateSharedSecret(fieldName: string) {
    this.formGroup.controls[fieldName].setValue(this.uuidv4());
  }

  generatePrimarySharedSecret() {
    this.formGroup.controls['primarySharedSecret'].setValue(this.uuidv4());
  }

  generateSecondarySharedSecret() {
    this.formGroup.controls['secondarySharedSecret'].setValue(this.uuidv4());
  }
}
