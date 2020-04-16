import { Component, OnInit } from '@angular/core';
import { Activator } from '../activator-store.model';
import { ActivatorStoreService } from '../activator-store.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activator-store-details',
  templateUrl: './activator-store-details.component.html',
  styleUrls: ['./activator-store-details.component.scss']
})
export class ActivatorStoreDetailsComponent implements OnInit {
  activator: Activator;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.activator = this.route.snapshot.data['activator'] as Activator;
  }
}
