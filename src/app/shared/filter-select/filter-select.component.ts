import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FilterOption } from './filter-select.model';

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss'],
})
export class FilterSelectComponent implements OnInit {
  @Input() options: FilterOption[];
  @Input() disabled: boolean;
  @Output() selectedFilter = new EventEmitter<FilterOption>();

  filterCtrl = new FormControl();
  removable = true;

  constructor() {}

  ngOnInit() {}

  select(value: FilterOption) {
    this.selectedFilter.emit(value);
    this.filterCtrl.setValue('');
  }
}
