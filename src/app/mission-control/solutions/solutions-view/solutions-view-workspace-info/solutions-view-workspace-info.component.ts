import { Component, OnInit, Input } from '@angular/core';
import { Solution } from '../../solutions.model';
import { Environment } from '@app/shared/shared.model';

@Component({
  selector: 'app-solutions-view-workspace-info',
  templateUrl: './solutions-view-workspace-info.component.html',
  styleUrls: ['./solutions-view-workspace-info.component.scss']
})
export class SolutionsViewWorkspaceInfoComponent implements OnInit {
  @Input() solution: Solution;

  constructor() {}

  ngOnInit() {}

  get environments(): string[] {
    return (this.solution.environments as Environment[]).map((env: Environment) => env.name);
  }
}
