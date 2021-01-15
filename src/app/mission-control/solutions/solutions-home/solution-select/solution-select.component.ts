import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SwitchFilter } from '@app/shared/switches/switches.model';
import { GridViewSwitchViewsNames } from '@app/shared/grid-view-switch/grid-view-switch.model';

@Component({
  selector: 'app-solution-select',
  templateUrl: './solution-select.component.html',
  styleUrls: ['./solution-select.component.scss']
})
export class SolutionSelectComponent implements OnInit {
  current$: Observable<string>;

  @Input() gridViewName: GridViewSwitchViewsNames;

  constructor() {}

  ngOnInit() {}
}
