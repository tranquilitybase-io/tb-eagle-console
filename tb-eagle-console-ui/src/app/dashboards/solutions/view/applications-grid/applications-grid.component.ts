import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-applications-grid',
  templateUrl: './applications-grid.component.html',
  styleUrls: ['./applications-grid.component.scss']
})
export class ApplicationsGridComponent {
  cards = [{ title: '', cols: 2, rows: 1 }];

  constructor(private router: Router) {}
  redirect() {
    this.router.navigateByUrl('/dashboard/activators');
  }
}
