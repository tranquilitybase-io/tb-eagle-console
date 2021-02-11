import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Team } from '../../teams.model';
import { Layout } from '@app/layout/layout.model';
import { LayoutService } from '@app/layout/layout.service';

@Component({
  selector: 'app-teams-home-grid',
  templateUrl: './teams-home-grid.component.html',
  styleUrls: ['./teams-home-grid.component.scss']
})
export class TeamsHomeGridComponent {
  @Input() teams$: Observable<Team[]>;
  @Input() isLoading: boolean;
  layout$: Observable<Layout>;

  constructor(private layoutService: LayoutService) {
    this.layout$ = this.layoutService.layoutObserver$;
  }
}
