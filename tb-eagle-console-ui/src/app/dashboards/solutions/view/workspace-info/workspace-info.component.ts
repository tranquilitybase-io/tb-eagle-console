import { Component, OnInit, Input } from '@angular/core';
import { Solution } from '../../solutions.model';

@Component({
  selector: 'app-workspace-info',
  templateUrl: './workspace-info.component.html',
  styleUrls: ['./workspace-info.component.scss']
})
export class WorkspaceInfoComponent implements OnInit {
  @Input() solution: Solution;

  constructor() {}

  ngOnInit() {}
}
