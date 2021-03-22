import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TableData } from '../sites.model';

@Component({
  selector: 'app-sites-view',
  templateUrl: './sites-view.component.html',
  styleUrls: ['./sites-view.component.scss'],
})
export class UsersViewComponent implements OnInit {
  site: TableData;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.site = this.route.snapshot.data['site'] as TableData;
  }
}
