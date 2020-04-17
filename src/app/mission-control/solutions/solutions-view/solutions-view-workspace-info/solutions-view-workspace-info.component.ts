import { Component, OnInit, Input } from '@angular/core';
import { Solution } from '../../solutions.model';

@Component({
  selector: 'app-solutions-view-workspace-info',
  templateUrl: './solutions-view-workspace-info.component.html',
  styleUrls: ['./solutions-view-workspace-info.component.scss']
})
export class SolutionsViewWorkspaceInfoComponent implements OnInit {
  @Input() solution: Solution;

  constructor() {}

  ngOnInit() {}
}
