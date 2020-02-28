import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-application-select',
  templateUrl: './application-select.component.html',
  styleUrls: ['./application-select.component.scss']
})
export class ApplicationSelectComponent implements OnInit {
  current$: Observable<string>;

  @Input() enableDeployAll: boolean;
  @Input('values') values: { name: string; count: number }[];

  @Output('onSelection') onSelection = new EventEmitter<string>();

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.current$ = this.route.queryParamMap.pipe(map(queryParams => queryParams.get('groupSwitch')));

    this.onGroupSwitch(this.route.snapshot.queryParams.categorySwitch || 'Favourites');
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
