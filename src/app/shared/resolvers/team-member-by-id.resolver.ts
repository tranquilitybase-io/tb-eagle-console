import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TeamMember } from '@app/administration/team-members/team-members.model';
import { TeamMembersService } from '@app/administration/team-members/team-members.service';

@Injectable({ providedIn: 'root' })
export class TeamMemberByIdResolver implements Resolve<TeamMember> {
  constructor(private teamMembersService: TeamMembersService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TeamMember> {
    return this.teamMembersService.getByKey(state.root.queryParamMap.get('id'));
  }
}
