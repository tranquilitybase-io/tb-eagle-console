import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Activator } from '../activators.model';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { setProgress } from '../activators.actions';
import { map } from 'rxjs/operators';
import { ActivatorsService } from '../activators.service';
import { LayoutService } from '@app/shared/layout/layout.service';
import { Layout } from '@app/shared/layout/layout.model';

@Component({
  selector: 'app-activators-grid',
  templateUrl: './activators-grid.component.html',
  styleUrls: ['./activators-grid.component.scss']
})
export class ActivatorsGridComponent implements OnInit {
  current$: Observable<string>;
  activators$: Observable<Activator[]>;
  layout$: Observable<Layout>;

  constructor(
    private activatorsService: ActivatorsService,
    private route: ActivatedRoute,
    private store: Store<any>,
    private layoutService: LayoutService
  ) {
    this.activators$ = activatorsService.filteredEntities$;
    this.layout$ = this.layoutService.layoutObserver$;
  }

  ngOnInit() {
    this.activatorsService.getAll();
    this.store.dispatch(setProgress({ step: 0 }));
    this.current$ = this.route.queryParamMap.pipe(map(queryParams => queryParams.get('categorySwitch')));
  }
}
