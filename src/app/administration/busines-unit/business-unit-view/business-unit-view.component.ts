import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BusinessUnit } from '../business-unit.model';

@Component({
  selector: 'app-users-view',
  templateUrl: './business-unit-view.component.html',
  styleUrls: ['./business-unit-view.component.scss'],
})
export class BusinessUnitViewComponent implements OnInit {
  businessUnit: BusinessUnit;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.businessUnit = this.route.snapshot.data['businessUnit'] as BusinessUnit;
  }
}
