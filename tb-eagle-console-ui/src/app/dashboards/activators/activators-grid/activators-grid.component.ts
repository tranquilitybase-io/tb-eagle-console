import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activator } from '../activators.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { setProgress } from '../activators.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-activators-grid',
  templateUrl: './activators-grid.component.html',
  styleUrls: ['./activators-grid.component.scss']
})
export class ActivatorsGridComponent implements OnInit {
  current$: Observable<string>;
  activators: Activator[];

  constructor(private route: ActivatedRoute, private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(setProgress({ step: 0 }));
    this.current$ = this.route.queryParamMap.pipe(map(queryParams => queryParams.get('categorySwitch')));
    this.activators = this.route.snapshot.data['activators'] as Activator[];
  }
}
