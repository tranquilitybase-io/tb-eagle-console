import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SwitchFilter } from '@app/shared/switches/switches.model';

@Component({
  selector: 'app-solution-select',
  templateUrl: './solution-select.component.html',
  styleUrls: ['./solution-select.component.scss']
})
export class SolutionSelectComponent implements OnInit {
  current$: Observable<string>;

  @Input('values') values: SwitchFilter[];

  @Output('onSelection') onSelection = new EventEmitter<string>();

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.current$ = this.route.queryParamMap.pipe(map(queryParams => queryParams.get('groupSwitch')));

    this.onGroupSwitch(this.route.snapshot.queryParams.groupSwitch || 'Actives');
  }

  onGroupSwitch(value: string) {
    // this.router.navigate(['.'], {
    //   relativeTo: this.route,
    //   queryParamsHandling: 'preserve',
    //   queryParams: {
    //     groupSwitch: value
    //   }
    // });
    this.onSelection.emit(value);
  }
}
