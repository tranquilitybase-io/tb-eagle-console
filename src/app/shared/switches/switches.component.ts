import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { SwitchFilter } from './switches.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.scss'],
})
export class SwitchesComponent implements OnInit {
  @Input() hideCount: boolean;
  @Input() filters: SwitchFilter[];
  @Input() current: string;
  @Input() paramSwitch: string;
  @Output() switchCallback = new EventEmitter<string>();

  current$: Observable<string>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.current$ = this.route.queryParamMap.pipe(map((queryParams) => queryParams.get(this.paramSwitch)));
    this.current$.subscribe((queryParam) => {
      if (queryParam !== null) this.current = queryParam;
      else {
        this.current = this.filters.filter((el) => el.defaultActive).length
          ? this.filters.filter((el) => el.defaultActive)[0].name
          : this.filters[0].name;
      }
    });
  }

  onChange(value: SwitchFilter) {
    this.switchCallback.emit(value.name);
    this.current = value.name;
  }
}
