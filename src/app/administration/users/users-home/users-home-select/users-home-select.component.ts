import { Component, OnInit, Input } from '@angular/core';
import { GridViewSwitchViewsNames } from '@app/shared/grid-view-switch/grid-view-switch.model';

@Component({
  selector: 'app-users-home-select',
  templateUrl: './users-home-select.component.html',
  styleUrls: ['./users-home-select.component.scss']
})
export class UsersHomeSelectComponent implements OnInit {
  @Input() gridViewName: GridViewSwitchViewsNames;
  constructor() {}

  ngOnInit() {}
}
