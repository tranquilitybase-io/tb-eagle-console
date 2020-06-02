import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WanConfiguration } from '../../landing-zone-wan.model';

@Component({
  selector: 'app-landing-zone-wan-view-vpn',
  templateUrl: './landing-zone-wan-view-vpn.component.html',
  styleUrls: ['./landing-zone-wan-view-vpn.component.scss']
})
export class LandingZoneWanViewVpnComponent implements OnInit {
  wanConfiguration: WanConfiguration;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.wanConfiguration = this.route.snapshot.data['wanConfiguration'];
  }

  cancel() {
    this.router.navigateByUrl('/administration/landing-zone/wan');
  }
}
