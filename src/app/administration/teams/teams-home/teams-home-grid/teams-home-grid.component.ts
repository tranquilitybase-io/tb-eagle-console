import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../../teams.model';
import { Layout } from '@app/layout/layout.model';
import { LayoutService } from '@app/layout/layout.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-teams-home-grid',
  templateUrl: './teams-home-grid.component.html',
  styleUrls: ['./teams-home-grid.component.scss']
})
export class TeamsHomeGridComponent {
  @Input() teams$: Observable<Team[]>;
  @Input() isLoading: boolean;
  layout$: Observable<Layout>;

  constructor(private layoutService: LayoutService, private router: Router, private route: ActivatedRoute) {
    this.layout$ = this.layoutService.layoutObserver$;
  }

  createNewTeam() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
