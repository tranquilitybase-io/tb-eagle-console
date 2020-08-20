import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { KeyValue } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing-zone-wan-create-vpn-tab',
  templateUrl: './landing-zone-wan-create-vpn-tab.component.html',
  styleUrls: ['./landing-zone-wan-create-vpn-tab.component.scss']
})
export class LandingZoneWanCreateVpnTabComponent implements OnInit {
  @Input() formGroup: FormGroup;

  subnetModeList: KeyValue<string, string>[];
  bgpRoutingModeList: KeyValue<string, string>[];

  constructor(private route: ActivatedRoute, private router: Router) {}
  get f() {
    return this.formGroup.controls;
  }

  cancel() {
    this.router.navigateByUrl('/administration/landing-zone/wan');
  }

  ngOnInit() {
    this.subnetModeList = this.route.snapshot.data['subnetModeList'];
    this.bgpRoutingModeList = this.route.snapshot.data['bgpRoutingModeList'];
  }
}
