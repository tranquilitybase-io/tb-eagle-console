import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-grids',
  templateUrl: './grids.component.html',
  styleUrls: ['./grids.component.scss']
})
export class GridsComponent implements OnInit {
  current$: Observable<string>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.current$ = this.route.queryParamMap.pipe(map(queryParams => queryParams.get('categorySwitch')));
  }
}
