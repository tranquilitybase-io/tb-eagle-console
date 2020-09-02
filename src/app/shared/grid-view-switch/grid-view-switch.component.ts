import { Component, Output, Input, EventEmitter, OnInit } from '@angular/core';
import getCustomProperty from '@app/shared/utils/getCustomProperty';
import { GridViewSwitchViewsNames, GridViewSwitchOptionsEnum, GridViewSwitchModel } from './grid-view-switch.model';
import { Store, select } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import { selectGridViewSwitchOptions } from './grid-view-switch.reducer';
import { setGridViewOption } from './grid-view-switch.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-grid-view-switch',
  templateUrl: './grid-view-switch.component.html',
  styleUrls: ['./grid-view-switch.component.scss']
})
export class GridViewSwitchComponent implements OnInit {
  @Input() readonly gridViewName: GridViewSwitchViewsNames;

  readonly activeColor = getCustomProperty('--white');
  readonly inactiveColor = getCustomProperty('--dark-grey');

  readonly options = [
    {
      name: GridViewSwitchOptionsEnum.grid,
      icon: '3x3grid'
    },
    {
      name: GridViewSwitchOptionsEnum.row,
      icon: 'row_view'
    }
  ];

  current$: Observable<GridViewSwitchModel>;

  @Output() onViewChange = new EventEmitter<GridViewSwitchOptionsEnum>();

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.current$ = this.store.pipe(select(selectGridViewSwitchOptions, this.gridViewName));
  }

  buttonActivnessColor(optionName): Observable<string> {
    return this.current$.pipe(
      map(currentOption =>
        currentOption && currentOption.option === optionName ? this.activeColor : this.inactiveColor
      )
    );
  }

  buttonActivnessState(optionName): Observable<boolean> {
    return this.current$.pipe(map(currentOption => currentOption && currentOption.option === optionName));
  }

  onOptionClick(name: GridViewSwitchOptionsEnum) {
    this.store.dispatch(
      setGridViewOption({
        viewOption: {
          viewName: this.gridViewName,
          option: name
        }
      })
    );
    this.onViewChange.emit(name);
  }
}
