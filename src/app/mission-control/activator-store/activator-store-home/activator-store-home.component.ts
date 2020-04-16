import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { setProgress } from '../activator-store.actions';
import { map } from 'rxjs/operators';
import { selectCategoriesCount, selectActivatorsCount } from '../activator-store.reducer';

@Component({
  selector: 'app-activator-store-home',
  templateUrl: './activator-store-home.component.html',
  styleUrls: ['./activator-store-home.component.scss']
})
export class ActivatorStoreHomeComponent implements OnInit {
  categorySwitch$: Observable<string>;
  categoriesCount$: Observable<number>;
  activatorsCount$: Observable<number>;

  categories = ['Web applications'];

  constructor(private route: ActivatedRoute, private router: Router, private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(setProgress({ step: 0 }));
    this.categorySwitch$ = this.route.queryParamMap.pipe(map(queryParams => queryParams.get('categorySwitch')));

    this.onSwitch(this.route.snapshot.queryParams.categorySwitch || 'Category');

    this.categoriesCount$ = this.store.pipe(select(selectCategoriesCount));
    this.activatorsCount$ = this.store.pipe(select(selectActivatorsCount));
  }

  onSwitch(categorySwitch: string) {
    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      queryParams: { categorySwitch }
    });
  }
}
