import { TeamMember } from '../team-members/team-members.model';

export class User {
  email: string;
  firstName: string;
  id: number;
  isAdmin?: boolean;
  lastName: string;
  showWelcome?: boolean;
  teamCount: number;
  teamMembers: number[] | TeamMember[];
}
