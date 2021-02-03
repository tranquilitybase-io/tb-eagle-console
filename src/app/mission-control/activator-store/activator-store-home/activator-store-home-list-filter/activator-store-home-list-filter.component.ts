import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ActivatorStoreFilterCreateComponent } from '../../activator-store-dialog/activator-store-dialog-filter/activator-store-dialog-filter.component';
import { FilterOption } from './activator-store-home-list-filter.model';
import { FilterOptions } from './activator-store-home-list-filter.model';

@Component({
  selector: 'app-activator-store-home-list-filter',
  templateUrl: './activator-store-home-list-filter.component.html',
  styleUrls: ['./activator-store-home-list-filter.component.scss']
})
export class ActivatorStoreHomeListFilterComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute, private dialog: MatDialog) {}

  @Output() filterList = new EventEmitter<FilterOption[]>();

  options = FilterOptions;
  currentFilterList = [] as FilterOption[];

  ngOnInit() {
    this.setInitialFilterValues();
  }

  showInformations() {
    this.dialog.open(ActivatorStoreFilterCreateComponent, {
      autoFocus: false
    });
  }

  onFilterSelect(filter: FilterOption) {
    const foundItem = this.currentFilterList.find(listItem => listItem.name === filter.name);
    if (!foundItem) {
      this.currentFilterList.push(filter);
      this.filterList.emit(this.currentFilterList);
      this.onQuerySwitch();
    }
  }

  onFilterUpdate(filterList: FilterOption[]) {
    this.currentFilterList = filterList;
    this.filterList.emit(this.currentFilterList);
    this.onQuerySwitch();
  }

  onQuerySwitch() {
    const params = this.currentFilterList.reduce((obj, item) => {
      return Object.assign(obj, { [item.filterQueryValue.key]: item.filterQueryValue.value });
    }, {});

    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParams: params
    });
  }

  setInitialFilterValues() {
    const initQueryParams = this.route.snapshot.queryParams;
    const keys = Object.keys(initQueryParams);

    if (keys.length === 0) {
      return null;
    }

    let initList = [] as FilterOption[];

    for (let i = 0; i < keys.length; i++) {
      initList.push({
        name: keys[i].charAt(0).toUpperCase() + keys[i].slice(1),
        filterBarName: `${keys[i]}:${initQueryParams[keys[i]]}`,
        filterQueryValue: { key: keys[i], value: initQueryParams[keys[i]] },
        shortQueryName: keys[i]
      });
    }

    this.currentFilterList = initList;
  }
}
