import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WanConfiguration } from '../landing-zone-wan.model';

@Component({
  selector: 'app-landing-zone-wan-view',
  templateUrl: './landing-zone-wan-view.component.html',
  styleUrls: ['./landing-zone-wan-view.component.scss']
})
export class LandingZoneWanViewComponent implements OnInit {
  wanConfiguration: WanConfiguration;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.wanConfiguration = this.route.snapshot.data['wanConfiguration'];
  }
}
