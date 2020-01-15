import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-category-switch',
  templateUrl: './category-switch.component.html',
  styleUrls: ['./category-switch.component.scss']
})
export class CategorySwitchComponent implements OnInit {
  current$: Observable<string>;

  @Input() categoryCount: number;
  @Input() allCount: number;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.current$ = this.route.queryParamMap.pipe(map(queryParams => queryParams.get('categorySwitch')));

    this.onSwitch(this.route.snapshot.queryParams.categorySwitch || 'Category');
  }

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
    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      queryParams: {
        categorySwitch: name
      }
    });
  }
}
