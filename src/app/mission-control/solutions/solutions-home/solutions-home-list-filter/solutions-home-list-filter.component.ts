import { Component, OnInit } from '@angular/core';
import { ListFilter } from './solutions-home-list-filter.model';
import { FilterOptions } from './solutions-home-list-filter.model';

@Component({
  selector: 'app-solutions-home-list-filter',
  templateUrl: './solutions-home-list-filter.component.html',
  styleUrls: ['./solutions-home-list-filter.component.scss']
})
export class SolutionsHomeListFilterComponent implements OnInit {
  constructor() {}
  name: string;
  options = FilterOptions;
  filterBarName: string;
  filterQueryValue: string;
  filterList = [] as ListFilter[];

  ngOnInit() {}

  onFilterSelect(filter: ListFilter) {
    const foundItem = this.filterList.find(listItem => listItem.name === filter.name);
    if (!foundItem) {
      this.filterList.push(filter);
      console.log(this.filterList);
    }
  }
}
