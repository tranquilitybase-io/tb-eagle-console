import { Component, OnInit } from '@angular/core';
import { Activator } from '../activator-store.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activator-store-view',
  templateUrl: './activator-store-view.component.html',
  styleUrls: ['./activator-store-view.component.scss']
})
export class ActivatorStoreViewComponent implements OnInit {
  activator: Activator;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.activator = this.route.snapshot.data['activator'] as Activator;
  }

  get lastUpdated(): Date {
    return new Date(this.activator.lastUpdated || null);
  }
}
