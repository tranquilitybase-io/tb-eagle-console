import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  private registeredOnChange: (value: any) => void = () => {};
  registeredOnTouched: () => void = () => {};
  value: any = '';
  disabled: boolean;

  @Input() required = false;
  @Input() area = false;
  @Input() type = 'text';
  @Input() name: string;
  @Input() label: string;
  @Input() placeholder: string;

  onChange(event: Event) {
    const value = (event.target as any).value;

    this.value = value;
    this.registeredOnChange(value);
    this.registeredOnTouched();
  }

  registerOnChange(registeredOnChange: (value: any) => void) {
    this.registeredOnChange = registeredOnChange;
  }

  registerOnTouched(registeredOnTouched: () => void) {
    this.registerOnTouched = registeredOnTouched;
  }

  setDisabledState(disabled: boolean) {
    this.disabled = disabled;
  }

  writeValue(value: any) {
    this.value = value;
  }
}
