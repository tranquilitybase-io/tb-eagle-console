import { Team } from '../teams/teams.model';
import { User } from '../users/users.model';
import { Role } from '@app/shared/shared.model';

export class TeamMember {
  id: number;
  isActive: boolean;
  isTeamAdmin: boolean;
  roleId: number;
  role: Role;
  teamId: number;
  team: Team;
  userId: number;
  user: User;
}
