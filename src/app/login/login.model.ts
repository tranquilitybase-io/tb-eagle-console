import { Team } from '@app/shared/shared.model';

export interface User {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  isAdmin: boolean;
  showWelcome: boolean;
  teams: Team[];
}
