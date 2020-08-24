import { Component, OnInit } from '@angular/core';
import { Activator } from '../activator-store.model';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectIsSelectedSolution, selectSelectedSolution } from '@app/mission-control/solutions/solutions.reducer';
import { Solution } from '@app/mission-control/solutions/solutions.model';

@Component({
  selector: 'app-activator-store-view',
  templateUrl: './activator-store-view.component.html',
  styleUrls: ['./activator-store-view.component.scss']
})
export class ActivatorStoreViewComponent implements OnInit {
  activator: Activator;

  isSelectedSolution$: Observable<boolean>;
  selectedSolution$: Observable<Solution>;
  selectedActivatorName: string;

  constructor(private route: ActivatedRoute, private store: Store<any>) {}

  ngOnInit() {
    this.activator = this.route.snapshot.data['activator'] as Activator;
    this.isSelectedSolution$ = this.store.pipe(select(selectIsSelectedSolution));

    this.selectedActivatorName = this.activator.name;
    this.selectedSolution$ = this.store.pipe(select(selectSelectedSolution));
  }

  get lastUpdated(): Date {
    return new Date(this.activator.lastUpdated || null);
  }
}
