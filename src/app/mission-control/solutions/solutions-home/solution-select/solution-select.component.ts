import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-solution-select',
  templateUrl: './solution-select.component.html',
  styleUrls: ['./solution-select.component.scss']
})
export class SolutionSelectComponent implements OnInit {
  current$: Observable<string>;

  @Input('values') values: { name: string; count: number }[];

  @Output('onSelection') onSelection = new EventEmitter<string>();

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.current$ = this.route.queryParamMap.pipe(map(queryParams => queryParams.get('groupSwitch')));

    this.onGroupSwitch(this.route.snapshot.queryParams.categorySwitch || 'Actives');
  }

  onGroupSwitch(value: string) {
    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      queryParams: {
        groupSwitch: value
      }
    });
    this.onSelection.emit(value);
  }
}
