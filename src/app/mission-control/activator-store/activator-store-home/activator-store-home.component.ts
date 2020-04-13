import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Activator } from '../activator-store.model';
import { ActivatorStoreService } from '../activator-store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { setProgress } from '../activator-store.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-activator-store-home',
  templateUrl: './activator-store-home.component.html',
  styleUrls: ['./activator-store-home.component.scss']
})
export class ActivatorStoreHomeComponent implements OnInit {
  current$: Observable<string>;
  activators$: Observable<Activator[]>;

  categoryCount = 8;
  allCount = 50;
  categories = ['Web applications'];

  constructor(
    private activatorStoreService: ActivatorStoreService,
    private route: ActivatedRoute,
    private router: Router,
    private store: Store<any>
  ) {
    this.activators$ = activatorStoreService.filteredEntities$;
  }

  ngOnInit() {
    this.activatorStoreService.getAll();
    this.store.dispatch(setProgress({ step: 0 }));
    this.current$ = this.route.queryParamMap.pipe(map(queryParams => queryParams.get('categorySwitch')));

    this.onSwitch(this.route.snapshot.queryParams.categorySwitch || 'Category');
  }

  get values_controls(): { name: string; count: number }[] {
    return [
      {
        name: 'Category',
        count: this.categoryCount
      },
      {
        name: 'All',
        count: this.allCount
      }
    ];
  }

  onSwitch(name: string) {
    this.router.navigate(['.'], {
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      queryParams: {
        categorySwitch: name
      }
    });
  }
}
