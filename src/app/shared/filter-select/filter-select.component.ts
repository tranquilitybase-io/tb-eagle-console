import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListFilter } from './filter-select.model';

@Component({
  selector: 'app-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss']
})
export class FilterSelectComponent implements OnInit {
  @Input() options: ListFilter[];
  @Output() selectedFilter = new EventEmitter<ListFilter>();

  filterCtrl = new FormControl();
  removable = true;

  constructor() {}

  ngOnInit() {}

  select(event: Event) {
    this.selectedFilter.emit(event.value as ListFilter);
    this.filterCtrl.setValue('');
  }
}
