import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ActivatorsService } from '@app/dashboards/activators/activators.service';
import { Activator } from '@app/dashboards/activators/activators.model';

@Component({
  selector: 'app-activator-container',
  templateUrl: './activator-container.component.html',
  styleUrls: ['./activator-container.component.scss']
})
export class ActivatorContainerComponent implements OnInit {
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
