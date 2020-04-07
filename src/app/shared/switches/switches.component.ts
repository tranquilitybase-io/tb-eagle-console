import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss']
})
export class SwitchesComponent {
  @Input() hideCount: boolean;
  @Input() current: string;
  @Input() values: { name: string; count: number }[];
  @Output() onValueChanged = new EventEmitter<string>();

  onChange(value: { name: string; count: number }) {
    this.current = value.name;
    this.onValueChanged.emit(value.name);
  }
}
