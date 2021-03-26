import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Site } from '../sites.model';

@Component({
  selector: 'app-sites-view',
  templateUrl: './sites-view.component.html',
  styleUrls: ['./sites-view.component.scss'],
})
export class SitesViewComponent implements OnInit {
  site: Site;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.site = this.route.snapshot.data['site'] as Site;
  }
}
