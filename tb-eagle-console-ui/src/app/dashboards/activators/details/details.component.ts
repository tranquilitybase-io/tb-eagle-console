import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activator } from '../activators.model';
import { Observable, of } from 'rxjs';
import { ActivatorsService } from '../activators.service';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  activator$: Observable<Activator>;

  constructor(private service: ActivatorsService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.activator$ = this.route.queryParams.pipe(
      switchMap(({ id }) => {
        return this.service.entityMap$.pipe(
          map(entityMap => entityMap[id]),
          switchMap(app => {
            if (app) {
              return of(app);
            }

            // Fetches activator from server if not previously loaded
            return this.service.getByKey(id);
          })
        );
      })
    );
  }
}
