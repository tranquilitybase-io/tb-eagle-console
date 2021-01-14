import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedServicesProgressItem } from '../shared-services.model';
import { map, startWith, delay } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { selectSharedServicesProgressItems } from '../shared-services.reducer';
import { getSharedServicesProgressItems } from '../shared-services.actions';

@Component({
  selector: 'app-shared-services-home',
  templateUrl: './shared-services-home.component.html',
  styleUrls: ['./shared-services-home.component.scss']
})
export class SharedServicesHomeComponent implements OnInit {
  progressItems$: Observable<SharedServicesProgressItem[]> = this.store.select(selectSharedServicesProgressItems);
  selectedIndex$: Observable<number>;
  isFinished: boolean;

  constructor(private store: Store<any>) {
    this.store.dispatch(getSharedServicesProgressItems());
  }

  ngOnInit() {
    this.selectedIndex$ = this.progressItems$.pipe(
      map(items => {
        const index = items.findIndex(item => !item.completed);
        this.isFinished = index === -1;
        return index < 0 ? 0 : index;
      }),
      startWith(0),
      delay(0)
    );
  }
}
