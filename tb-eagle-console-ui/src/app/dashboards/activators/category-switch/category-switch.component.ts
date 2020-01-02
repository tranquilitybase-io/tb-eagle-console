import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-category-switch',
  templateUrl: './category-switch.component.html',
  styleUrls: ['./category-switch.component.scss']
})
export class CategorySwitchComponent {
  @Input() categoryCount: number;
  @Input() allCount: number;

  @Output() onSwitch = new EventEmitter<string>();

  get values(): { name: string; count: number }[] {
    return [
      {
        name: 'Category',
        count: this.categoryCount
      },
      {
        name: 'All',
        count: this.allCount
      }
    ];
  }
}
