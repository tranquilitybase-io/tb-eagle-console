import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activator } from '../../interfaces';
import { Observable, of } from 'rxjs';
import { ActivatorsService } from '../../activators.service';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-details-container',
  templateUrl: './details-container.component.html',
  styleUrls: ['./details-container.component.scss']
})
export class DetailsContainerComponent {
  app$: Observable<Activator>;

  constructor(private appsService: ActivatorsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.app$ = this.route.queryParams.pipe(
      switchMap(({ id }) => {
        return this.appsService.entityMap$.pipe(
          map(entityMap => entityMap[id]),
          switchMap(app => {
            if (app) {
              return of(app);
            }

            // Fetches activator from server if not previously loaded
            return this.appsService.getByKey(id);
          })
        );
      })
    );
  }
}
