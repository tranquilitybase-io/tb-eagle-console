import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DropdownComponent),
      multi: true
    }
  ]
})
export class DropdownComponent implements ControlValueAccessor {
  private registeredOnChange: (value: any) => void = () => {};
  private registeredOnTouched: () => void = () => {};
  private _values = [];
  selected: any;
  disabled: boolean;
  open = false;

  @Input() required = false;
  @Input() label: string;
  @Input() placeholder = '';
  @Input() displayFn: (value: any) => string = x => (!x ? this.placeholder : x.toString());
  @Input() set values(values: any[]) {
    this._values = values;
    this.selected = values[0];
    this.onSelected(this.selected);
  }

  get values(): any[] {
    return this._values;
  }

  toggleOpen() {
    this.open = !this.open;
    this.registeredOnTouched();
  }

  onSelected(value: any) {
    this.selected = value;
    this.open = false;
    this.registeredOnChange(value);
    this.registeredOnTouched();
  }

  registerOnChange(registeredOnChange: (value: any) => void) {
    this.registerOnChange = registeredOnChange;
  }

  registerOnTouched(registeredOnTouched: () => void) {
    this.registerOnTouched = registeredOnTouched;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  writeValue(value: any) {
    this.selected = value;
  }
}
