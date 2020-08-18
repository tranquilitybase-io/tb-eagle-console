import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { SwitchFilter } from './switches.model';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent implements OnInit {
  @Input() hideCount: boolean;
  @Input() filters: SwitchFilter[];
  @Input() current: string;
  @Output() switchCallback = new EventEmitter<string>();

  ngOnInit(): void {
    this.current = this.filters.filter(el => el.isActive)[0].name;
  }

  onChange(value: SwitchFilter) {
    this.switchCallback.emit(value.name);
    this.current = value.name;
  }
}
