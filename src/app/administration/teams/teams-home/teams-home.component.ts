import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';
import { Observable } from 'rxjs';
import { Team } from '../teams.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { SwitchFilter } from '@app/shared/switches/switches.model';
import {
  GridViewSwitchViewsNames,
  GridViewSwitchOptionsEnum
} from '@app/shared/grid-view-switch/grid-view-switch.model';
import { Store } from '@ngrx/store';
import { selectGridViewSwitchOptions } from '@app/shared/grid-view-switch/grid-view-switch.reducer';
import { getTeams } from '../teams.actions';
import { selectGetTeamsStatus } from './../teams.reducer';
import { Loadable } from '@app/shared/shared.reducer';

@Component({
  selector: 'app-teams-home',
  templateUrl: './teams-home.component.html',
  styleUrls: ['./teams-home.component.scss']
})
export class TeamsHomeComponent implements OnInit {
  teams$: Observable<Team[]>;
  getTeamsStatus$: Observable<Loadable> = this.store.select(selectGetTeamsStatus);

  filters: SwitchFilter[] = [
    {
      name: 'Favourites',
      count: 0,
      defaultActive: false
    },
    { name: 'Actives', count: 0, defaultActive: true },
    { name: 'Archived', count: 0, defaultActive: false }
  ];

  gridViewOptionsName: GridViewSwitchViewsNames = GridViewSwitchViewsNames.teams;
  currentGridViewOption$: Observable<string>;

  constructor(private teamsService: TeamsService, private route: ActivatedRoute, private store: Store<any>) {
    this.teams$ = teamsService.filteredEntities$;
  }

  ngOnInit() {
    this.store.dispatch(getTeams());
    this.teamsService.getAll().subscribe(teams => this.updateNumbering(teams));
    const current$: Observable<string> = this.route.queryParamMap.pipe(
      map(queryParams => queryParams.get('groupSwitch'))
    );
    current$.subscribe(event => this.setFilter(event));

    this.currentGridViewOption$ = this.store.select(selectGridViewSwitchOptions(this.gridViewOptionsName));
  }

  setFilter(filter: string) {
    this.teamsService.setFilter(filter);
  }

  updateNumbering(teams: Team[]) {
    const filterFavouritesLength = teams.filter(team => team.isFavourite).length;
    const filterActivesLenth = teams.filter(team => team.isActive).length;
    const filterArchivedLength = teams.filter(team => !team.isActive).length;

    this.filters = [
      { name: 'Favourites', count: filterFavouritesLength, defaultActive: false },
      { name: 'Actives', count: filterActivesLenth, defaultActive: true },
      { name: 'Archived', count: filterArchivedLength, defaultActive: false }
    ];
  }

  get isGridViewEnabled$(): Observable<boolean> {
    return this.currentGridViewOption$.pipe(map(option => option === GridViewSwitchOptionsEnum.grid));
  }
}
