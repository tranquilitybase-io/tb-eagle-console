import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilterOption, FilterOptions } from './business-unit-home-filter.model';

@Component({
  selector: 'app-business-unit-home-filter',
  templateUrl: './business-unit-home-filter.component.html',
  styleUrls: ['./business-unit-home-filter.component.scss'],
})
export class BusinessUnitHomeFilterComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  @Output() filterList = new EventEmitter<FilterOption[]>();

  options = FilterOptions;
  currentFilterList = [] as FilterOption[];

  ngOnInit() {
    this.setInitialFilterValues();
  }

  onFilterSelect(filter: FilterOption) {
    const foundItem = this.currentFilterList.find((listItem) => listItem.name === filter.name);
    if (!foundItem) {
      this.currentFilterList.push(filter);
      this.filterList.emit(this.currentFilterList);
      this.onQuerySwitch();
    }
  }

  onFilterRemove(filterList: FilterOption[]) {
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
      queryParams: params,
    });
  }

  setInitialFilterValues() {
    const initQueryParams = this.route.snapshot.queryParams;
    const keys = Object.keys(initQueryParams);
    if (keys.length === 0) {
      return null;
    }
    this.currentFilterList = keys.map((key) => this.options.find((option) => option.shortQueryName === key));
  }
}
