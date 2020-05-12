import { Component, OnInit } from '@angular/core';
import { Activator } from '../../activator-store/activator-store.model';
import { SolutionsService } from '../solutions.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-solutions-details',
  templateUrl: './solutions-details.component.html',
  styleUrls: ['./solutions-details.component.scss']
})
export class SolutionsDetailsComponent implements OnInit {
  activator: Activator;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.activator = this.route.snapshot.data['activator'] as Activator;
  }
}
