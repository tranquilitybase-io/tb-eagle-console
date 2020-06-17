import { Component, OnInit, Input, HostListener } from '@angular/core';
import { Team } from '@app/administration/teams/teams.model';

@Component({
  selector: 'app-teams-home-grid-card',
  templateUrl: './teams-home-grid-card.component.html',
  styleUrls: ['./teams-home-grid-card.component.scss']
})
export class TeamsHomeGridCardComponent implements OnInit {
  @Input() team: Team;

  active = false;

  constructor() {}

  ngOnInit() {}

  @HostListener('mouseover')
  onMouseOver() {
    this.active = true;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.active = false;
  }

  get lastUpdated(): Date {
    return new Date(this.team.lastUpdated || null);
  }
}
