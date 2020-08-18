import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';
import { Observable } from 'rxjs';
import { Team } from '../teams.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { SwitchFilter } from '@app/shared/switches/switches.model';

@Component({
  selector: 'app-teams-home',
  templateUrl: './teams-home.component.html',
  styleUrls: ['./teams-home.component.scss']
})
export class TeamsHomeComponent implements OnInit {
  teams$: Observable<Team[]>;

  filters: SwitchFilter[] = [
    { name: 'Favourites', count: 0, defaultActive: false },
    { name: 'Actives', count: 0, defaultActive: true },
    { name: 'Archived', count: 0, defaultActive: false }
  ];

  constructor(private teamsService: TeamsService, private route: ActivatedRoute) {
    this.teams$ = teamsService.filteredEntities$;
  }

  ngOnInit() {
    this.teamsService.getAll().subscribe(this.updateNumbering.bind(this));

    const current$: Observable<string> = this.route.queryParamMap.pipe(
      map(queryParams => queryParams.get('groupSwitch'))
    );
    current$.subscribe(event => this.setFilter(event));
  }

  setFilter(filter: string) {
    this.teamsService.setFilter(filter);
  }

  updateNumbering(teams: Team[]) {
    let filterFavouritesLength = teams.filter(team => team.isFavourite).length;
    let filterActivesLenth = teams.filter(team => team.isActive).length;
    let filterArchivedLength = teams.filter(team => !team.isActive).length;

    this.filters = [
      { name: 'Favourites', count: filterFavouritesLength, defaultActive: false },
      { name: 'Actives', count: filterActivesLenth, defaultActive: true },
      { name: 'Archived', count: filterArchivedLength, defaultActive: false }
    ];
  }
}
