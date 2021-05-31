import { Team } from '@app/administration/teams/teams.model';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  isMCAdmin: boolean;
  isLZAdmin: boolean;
  showWelcome: boolean;
  teams: string[] | Team[];
}
