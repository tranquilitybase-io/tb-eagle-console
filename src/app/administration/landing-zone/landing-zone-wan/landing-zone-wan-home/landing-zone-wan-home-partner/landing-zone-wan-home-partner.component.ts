import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutService } from '@app/layout/layout.service';
import { Layout } from '@app/layout/layout.model';

@Component({
  selector: 'app-landing-zone-wan-home-partner',
  templateUrl: './landing-zone-wan-home-partner.component.html',
  styleUrls: ['./landing-zone-wan-home-partner.component.scss']
})
export class LandingZoneWanHomePartnerComponent implements OnInit {
  layout$: Observable<Layout>;

  constructor(private layoutService: LayoutService) {
    this.layout$ = this.layoutService.layoutObserver$;
  }

  ngOnInit() {}

  createNewConnection() {}
}
