import { Component, OnInit, Input } from '@angular/core';
import { GridViewSwitchViewsNames } from '@app/shared/grid-view-switch/grid-view-switch.model';

@Component({
  selector: 'app-business-unit-home-select',
  templateUrl: './business-unit-home-select.component.html',
  styleUrls: ['./business-unit-home-select.component.scss']
})
export class BusinessUnitHomeSelectComponent implements OnInit {
  @Input() gridViewName: GridViewSwitchViewsNames;
  constructor() {}

  ngOnInit() {}
}
