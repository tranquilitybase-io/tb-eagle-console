import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Layout } from '@app/shared/layout/layout.model';
import { LayoutService } from '@app/shared/layout/layout.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../users.model';

@Component({
  selector: 'app-users-home-grid',
  templateUrl: './users-home-grid.component.html',
  styleUrls: ['./users-home-grid.component.scss']
})
export class UsersHomeGridComponent {
  @Input() users$: Observable<User[]>;
  layout$: Observable<Layout>;

  constructor(private layoutService: LayoutService, private router: Router, private route: ActivatedRoute) {
    this.layout$ = this.layoutService.layoutObserver$;
  }

  createNewUser() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
