import { Component, Input, EventEmitter, Output } from '@angular/core';
import { SwitchFilter } from './switches.model';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent {
  @Input() hideCount: boolean;
  @Input() filters: SwitchFilter[];
  @Output() switchCallback = new EventEmitter<string>();

  onChange(value: SwitchFilter) {
    this.switchCallback.emit(value.name);
  }
}
