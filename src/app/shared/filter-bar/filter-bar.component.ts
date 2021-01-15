import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { FilterOption } from './filter-bar.model';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent implements OnInit {
  @Input() list: FilterOption[];
  @Output() newList = new EventEmitter<FilterOption[]>();

  filterBarCtrl = new FormControl();
  removable = true;

  separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor() {}

  ngOnInit() {}

  remove(item: FilterOption): void {
    const filteredItem = this.list.find(listItem => listItem.filterBarName === item.filterBarName);
    const index = this.list.indexOf(filteredItem);

    if (index >= 0) {
      this.list.splice(index, 1);
    }

    this.newList.emit(this.list);
  }
}
