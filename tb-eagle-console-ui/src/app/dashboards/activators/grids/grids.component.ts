import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { setProgress } from '../activators.actions';

@Component({
  selector: 'app-grids',
  templateUrl: './grids.component.html',
  styleUrls: ['./grids.component.scss']
})
export class GridsComponent implements OnInit {
  current$: Observable<string>;

  constructor(private route: ActivatedRoute, private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(setProgress({ step: 0 }));
    this.current$ = this.route.queryParamMap.pipe(map(queryParams => queryParams.get('categorySwitch')));
  }
}
