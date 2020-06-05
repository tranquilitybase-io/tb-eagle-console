import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';
import { Observable } from 'rxjs';
import { Team } from '../teams.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-teams-home',
  templateUrl: './teams-home.component.html',
  styleUrls: ['./teams-home.component.scss']
})
export class TeamsHomeComponent implements OnInit {
  teams$: Observable<Team[]>;

  values = [{ name: 'Favourites' }, { name: 'Actives' }, { name: 'Archived' }];

  constructor(private teamsService: TeamsService, private route: ActivatedRoute) {
    this.teams$ = teamsService.filteredEntities$;
  }

  ngOnInit() {
    this.teamsService.getAll();

    const current$: Observable<string> = this.route.queryParamMap.pipe(
      map(queryParams => queryParams.get('groupSwitch'))
    );
    current$.subscribe(event => this.setFilter(event));
  }

  setFilter(filter: string) {
    this.teamsService.setFilter(filter);
  }
}
