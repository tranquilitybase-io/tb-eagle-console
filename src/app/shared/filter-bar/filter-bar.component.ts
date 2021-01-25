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
  @Input() list: FilterOption[] = [];
  @Input() inputMode: boolean = false;
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

  add(event): void {
    const input = event.input;
    const filterBarName = event.value;
    const index = filterBarName.indexOf(':');

    if (index === -1) {
      input.value = '';
      return null;
    }

    const key = filterBarName.substring(0, index);
    const value = filterBarName.substring(index + 1);
    const name = key.charAt(0).toUpperCase() + key.slice(1);

    if ((filterBarName || '').trim()) {
      this.list.push({
        name,
        filterBarName,
        filterQueryValue: { key, value },
        shortQueryName: key
      });
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
    this.newList.emit(this.list);
  }
}
