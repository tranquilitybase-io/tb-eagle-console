import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Solution } from '../solutions.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  values = [
    { name: 'Applications', count: 0 },
    { name: 'Workspace', count: 0 }
  ];

  solution: Solution;

  current$: Observable<string>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.solution = this.route.snapshot.data['solution'];
    this.current$ = this.route.queryParamMap.pipe(map(queryParams => queryParams.get('groupSwitch')));
  }
}
