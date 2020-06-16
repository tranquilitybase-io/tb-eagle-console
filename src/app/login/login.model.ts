import { Team } from '@app/administration/teams/teams.model';

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  showWelcome: boolean;
  teams: string[] | Team[];
}
