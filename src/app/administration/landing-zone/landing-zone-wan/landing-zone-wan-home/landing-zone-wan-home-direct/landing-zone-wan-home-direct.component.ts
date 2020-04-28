import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutService } from '@app/shared/layout/layout.service';
import { Layout } from '@app/shared/layout/layout.model';

@Component({
  selector: 'app-landing-zone-wan-home-direct',
  templateUrl: './landing-zone-wan-home-direct.component.html',
  styleUrls: ['./landing-zone-wan-home-direct.component.scss']
})
export class LandingZoneWanHomeDirectComponent implements OnInit {
  layout$: Observable<Layout>;

  constructor(private layoutService: LayoutService) {
    this.layout$ = this.layoutService.layoutObserver$;
  }

  ngOnInit() {}

  createNewConnection() {}
}
