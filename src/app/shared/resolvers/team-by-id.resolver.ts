import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TeamsService } from '@app/administration/teams/teams.service';
import { Team } from '@app/administration/teams/teams.model';

@Injectable({ providedIn: 'root' })
export class TeamByIdResolver implements Resolve<Team> {
  constructor(private teamService: TeamsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Team> {
    return this.teamService.getByKey(state.root.queryParamMap.get('id'));
  }
}
