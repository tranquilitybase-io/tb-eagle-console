import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() required = false;
  @Input() area = false;
  @Input() type = 'text';
  @Input() name: string;
  @Input() label: string;
  @Input() value: any;
  @Output() valueChange = new EventEmitter<any>();

  onChange(value: any) {
    this.value = value;
    this.valueChange.emit(value);
  }
}
