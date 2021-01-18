import { Component, OnInit } from '@angular/core';
import {
  GridViewSwitchViewsNames,
  GridViewSwitchModel,
  GridViewSwitchOptionsEnum
} from '@app/shared/grid-view-switch/grid-view-switch.model';
import { selectGridViewSwitchOptions } from '@app/shared/grid-view-switch/grid-view-switch.reducer';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-team-members-container',
  templateUrl: './team-members-container.component.html',
  styleUrls: ['./team-members-container.component.scss']
})
export class TeamMembersContainerComponent implements OnInit {
  gridViewOptionsName: GridViewSwitchViewsNames = GridViewSwitchViewsNames.teamMembers;
  currentGridViewOption$: Observable<string>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.currentGridViewOption$ = this.store.pipe(select(selectGridViewSwitchOptions(this.gridViewOptionsName)));
  }

  get isGridViewEnabled$(): Observable<boolean> {
    return this.currentGridViewOption$.pipe(
      map(currentGridViewOption => currentGridViewOption === GridViewSwitchOptionsEnum.grid)
    );
  }
}
