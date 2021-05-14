import { Component, OnInit } from '@angular/core';
import { Team } from '../../teams.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teams-view-overview',
  templateUrl: './teams-view-overview.component.html',
  styleUrls: ['./teams-view-overview.component.scss'],
})
export class TeamsViewOverviewComponent implements OnInit {
  team: Team;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.team = this.route.snapshot.data['team'] as Team;
  }
}
