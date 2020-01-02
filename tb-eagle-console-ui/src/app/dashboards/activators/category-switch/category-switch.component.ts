import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-category-switch',
  templateUrl: './category-switch.component.html',
  styleUrls: ['./category-switch.component.scss']
})
export class CategorySwitchComponent {
  current = 'Category';

  @Input() categoryCount: number;
  @Input() allCount: number;

  constructor(private router: Router, private route: ActivatedRoute) {}

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

  onSwitch(name: string) {
    this.router.navigateByUrl(`/dashboard/activators/${name.toLowerCase()}`, { queryParamsHandling: 'preserve' });
  }
}
