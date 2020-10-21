import { getUsers } from './../users.actions';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../users.model';
import { Observable } from 'rxjs';
import {
  GridViewSwitchViewsNames,
  GridViewSwitchModel,
  GridViewSwitchOptionsEnum
} from '@app/shared/grid-view-switch/grid-view-switch.model';
import { select, Store } from '@ngrx/store';
import { selectGridViewSwitchOptions } from '@app/shared/grid-view-switch/grid-view-switch.reducer';
import { map } from 'rxjs/operators';
import { selectGetUsersStatus, selectUsers } from '../users.reducer';
import { Loadable } from '@app/shared/shared.reducer';

@Component({
  selector: 'app-users-home',
  templateUrl: './users-home.component.html',
  styleUrls: ['./users-home.component.scss']
})
export class UsersHomeComponent implements OnInit {
  [x: string]: any;
  users$: Observable<User[]> = this.store.select(selectUsers);
  getUsersStatus$: Observable<Loadable> = this.store.select(selectGetUsersStatus);

  gridViewOptionsName: GridViewSwitchViewsNames = GridViewSwitchViewsNames.users;
  currentGridViewOption$: Observable<GridViewSwitchModel>;

  constructor(private route: ActivatedRoute, private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(getUsers());
    this.currentGridViewOption$ = this.store.pipe(select(selectGridViewSwitchOptions, this.gridViewOptionsName));
  }

  get isGridViewEnabled$(): Observable<boolean> {
    return this.currentGridViewOption$.pipe(
      map(currentGridViewOption => currentGridViewOption.option === GridViewSwitchOptionsEnum.grid)
    );
  }
}
