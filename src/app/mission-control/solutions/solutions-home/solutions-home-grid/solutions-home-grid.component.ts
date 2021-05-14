import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LayoutService } from '@app/layout/layout.service';
import { Layout } from '@app/layout/layout.model';
import { Solution } from '../../solutions.model';

@Component({
  selector: 'app-solutions-home-grid',
  templateUrl: './solutions-home-grid.component.html',
  styleUrls: ['.//solutions-home-grid.component.scss'],
})
export class SolutionsHomeGridComponent implements OnInit {
  @Input() solutions$: Observable<Solution[]>;
  @Input() isLoading: boolean;
  layout$: Observable<Layout>;

  constructor(private layoutService: LayoutService) {
    this.layout$ = this.layoutService.layoutObserver$;
  }

  ngOnInit() {}
}
