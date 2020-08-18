import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SwitchFilter } from '@app/shared/switches/switches.model';

@Component({
  selector: 'app-teams-select',
  templateUrl: './teams-select.component.html',
  styleUrls: ['./teams-select.component.scss']
})
export class TeamsSelectComponent implements OnInit {
  current$: Observable<string>;

  @Input('values') values: SwitchFilter[];

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
