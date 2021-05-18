import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-solutions-view-select',
  templateUrl: './solutions-view-select.component.html',
  styleUrls: ['./solutions-view-select.component.scss'],
})
export class SolutionsViewSelectComponent implements OnInit {
  current$: Observable<string>;

  @Input() enableDeployAll: boolean;
  @Input('values') values: { name: string; count: number }[];

  @Output('onSelection') onSelection = new EventEmitter<string>();

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.current$ = this.route.queryParamMap.pipe(map((queryParams) => queryParams.get('groupSwitch')));

    this.onGroupSwitch(this.route.snapshot.queryParams.categorySwitch || 'Favourites');
  }

  onGroupSwitch(value: string) {
    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      queryParams: {
        groupSwitch: value,
      },
    });
    this.onSelection.emit(value);
  }
}
